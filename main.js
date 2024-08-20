const template = document.querySelector("#pet-card-template");
const wrapper = document.createDocumentFragment();


async function start(){
    const weatherPromise = await fetch("https://api.weather.gov/gridpoints/OKX/35,34/forecast");
    const weatherData = await weatherPromise.json();

    const temperature = weatherData.properties.periods[0].temperature;
    document.querySelector("#temperature-output").textContent = temperature;

}
start();

async function petsArea(){
    const petsPromise = await fetch("https://learnwebcode.github.io/bootcamp-pet-data/pets.json");
    const petsData = await petsPromise.json();
    petsData.forEach(pet=>{
        const clone = template.content.cloneNode(true);
        console.log(pet.name);
        clone.querySelector("h3").textContent = pet.name;
        clone.querySelector(".pet-description").textContent = pet.description;
        if(!pet.photo) pet.photo = "images/Fallback.jpg";
        clone.querySelector(".pet-card-photo img").src = pet.photo;
        clone.querySelector(".pet-card-photo img").alt = `A ${pet.species} named ${pet.name}`;
        clone.querySelector(".pet-age").textContent = createAgeText(pet.birthYear);
        wrapper.appendChild(clone);
    });
    document.querySelector(".list-of-pets").appendChild(wrapper);
}
petsArea();

function createAgeText(birthYear){
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;

    if(age == 0) return "1 year old";
    if(age == 1) return "Less than a year old";

    return `${age} years old`;

}

// pet filter button
const allButtons = document.querySelectorAll(".pet-filter button");

allButtons.forEach(el=>{
    el.addEventListener("click",handleButtonClick)
}); 

function handleButtonClick(e){
    // remove active class from any and all buttons
    allButtons.forEach(el => el.classList.remove("active"));
    // add active class to the specific button that just got clicked
    e.target.classList.add("active");
    // actually filter the pets below
}
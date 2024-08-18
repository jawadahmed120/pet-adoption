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
        wrapper.appendChild(clone);
    });
    document.querySelector(".list-of-pets").appendChild(wrapper);
}
petsArea();
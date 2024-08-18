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
        console.log(pet.name);
    });
}
petsArea();
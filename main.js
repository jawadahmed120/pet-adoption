async function start(){
    const weatherPromise = await fetch("https://api.weather.gov/gridpoints/OKX/35,34/forecast");
    const weatherData = await weatherPromise.json();
<<<<<<< HEAD
    console.log(weatherData.properties.periods[0].temperature);
=======
    const temperature = weatherData.properties.periods[0].temperature;
    document.querySelector("#temperature-output").textContent = temperature;

>>>>>>> f4605464c5babf8f92acd242939408c22dcbfae6
}
start();
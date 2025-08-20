const temperature_field = document.querySelector(".temp p")
const location_field = document.querySelector(".loc p")
const datefiled = document.querySelector(".date p")
const weatherfiled = document.querySelector(".weather p")
const form = document.querySelector('form')
const searchField = document.querySelector("input[type='text']");

form.addEventListener('submit',searchforlocation)



const fetch_res = async (targetloc)=>{
    let url = `http://api.weatherapi.com/v1/current.json?key=8e2717b5551c493b9da122346250708&q=${targetloc}&aqi=no`
    
    try{
    const result = await fetch(url)
    const data = await result.json()
    console.log(data)

    let temperature = data.current.temp_c;
    let locname = data.location.name;
    let time = data.location.localtime;
    let cloud = data.current.condition.text;

    temperature_field.textContent = `${temperature} °C`;
    location_field.textContent = locname;
    datefiled.textContent = time;
    weatherfiled.textContent = cloud;
    }

    catch (error) {
    console.error("Error fetching weather data:", error);
    alert("Failed to fetch weather data. Please try again.");
  }
};

fetch_res("mumbai")

function searchforlocation(e){
    e.preventDefault()

    let target = searchField.value.trim();
    if (target) {
        fetch_res(target);
    } else {
        alert("Please enter a city name.");
    }
}


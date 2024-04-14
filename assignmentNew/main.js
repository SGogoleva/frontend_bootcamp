import {
  getCityName,
  getCurrentWeather,
  get5DayWeatherForecast,
} from "./api.js";

const navbarEl = document.querySelector("[data-navbar]");
const pageEl = document.getElementById("page");

function init() {
  renderNavbarElement();
}

function renderNavbarElement() {
  navbarEl.innerHTML = /*html*/ `
      <nav>
        <h2>Weather App</h2>
        <button data-weather-btn>Weather Details</button>
        <button data-favourites-btn>Favourite</button>
      </nav>
    `;
  navbarEl.querySelector("[data-weather-btn]").addEventListener("click", () => {
    renderWeatherDetails();
  });
  navbarEl
    .querySelector("[data-favourites-btn]")
    .addEventListener("click", () => {
      renderFavourites();
    });
}

function renderWeatherDetails() {
  pageEl.innerHTML = /*html*/ `
    <h1>Weather forecast</h1>
    <form action="search submit">
        <input type="text" placeholder="Input the city to get forecast" data-city-input>
        <button data-search>Search</button>
    </form>
    `;
  
  const buttonEl = document.querySelector("[data-search]");
  buttonEl.addEventListener("click", async (event) => {
    event.preventDefault()
    const inputEl = document.querySelector("[data-city-input]");
    const citiesData = await getCityName(inputEl.value);
    if (citiesData.length > 1) {
        try {
            const selectEl = document.createElement("select");
            selectEl.setAttribute("id", "dropdown-cities")
            citiesData.forEach((data) => {
              const optionEl = document.createElement("option");
              optionEl.value = `${data.LocalizedName}, ${data.AdministrativeArea.LocalizedName}, ${data.Country.LocalizedName}, ${data.Key}`;
              optionEl.textContent = `${data.LocalizedName} ${data.AdministrativeArea.LocalizedName} ${data.Country.LocalizedName}`;
              selectEl.appendChild(optionEl);
              pageEl.appendChild(selectEl)
            });
          } catch (error) {
            console.error(error);
          }
        const optionEl = document.getElementById('dropdown-cities')
        optionEl.addEventListener("change", async (event) => {
            event.preventDefault()
            const locationKeyValue = optionEl.value.split(",")[3]
            console.log("🚀 ~ optionEl.addEventListener ~ locationKeyValue:", locationKeyValue)
            
            const fiveDayWeatherForecast = await get5DayWeatherForecast(locationKeyValue)
            console.log("🚀 ~ document.getElementById ~ fiveDayWeatherForecast:", fiveDayWeatherForecast)
        })
        
    }
    else if ((citiesData.length = 1)) {
      console.log(citiesData);
    } 
    else if ((citiesData == [])) {
      renderNotFound()
      console.log("The city is not found");
    }
    
  });
}

function renderFavourites() {
  pageEl.innerHTML = /*html*/ `
    <h1>Favourites</h1>
    `;
}

function renderWeatherResult() {}

function renderNotFound() {
  pageEl.innerHTML = /*html*/ `
  <h3>The city is not found</h3>
  `
}

init();

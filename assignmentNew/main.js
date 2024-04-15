import {
  getCityName,
  getCurrentWeather,
  get5DayWeatherForecast,
} from "./api.js";
// import moment from "./node_modules/moment/moment.js"

const navbarEl = document.querySelector("[data-navbar]");
const pageEl = document.getElementById("page");
const defaultCityData = { key: "215854", city: "Tel Aviv" };
let isDefaultShown = false

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

    showDefault();

  const buttonEl = document.querySelector("[data-search]");
  buttonEl.addEventListener("click", async (event) => {
    event.preventDefault();
  
    const inputEl = document.querySelector("[data-city-input]");
    const cityData = await getCityName(inputEl.value);
    if (cityData.length > 1) {
      try {
        renderSelect(cityData);
      } catch (error) {
        console.error(error);
      }
      const optionEl = document.getElementById("dropdown-cities");
      optionEl.addEventListener("click", async (event) => {
        event.preventDefault();
        const locationKeyValue = optionEl.value.split(",")[3];
        const locationName = `${optionEl.value.split(",")[0]}, ${
          optionEl.value.split(",")[1]
        }, ${optionEl.value.split(",")[2]}`;
        const fiveDayWeatherForecast = await get5DayWeatherForecast(
          locationKeyValue
        );
        const currentWeather = await getCurrentWeather(locationKeyValue);
        console.log(fiveDayWeatherForecast.DailyForecasts);
        console.log(currentWeather);
        renderCurrentTemperature(currentWeather, locationName);
        renderWeatherResult(fiveDayWeatherForecast.DailyForecasts);
      });
    } else if (cityData.length == 1) {
      console.log(cityData);
    } else if (cityData == 0) {
      renderNotFound();
      console.log("The city is not found");
    }
  });
  
}

function renderFavourites() {
  pageEl.innerHTML = /*html*/ `
    <h1>Favourites</h1>
    `;
}

function renderWeatherResult(forecastData) {
  const existingResult = document.getElementById("result");
  if (existingResult) {
    existingResult.remove();
  }
  const resultContainer = document.createElement("div");
  resultContainer.setAttribute("id", "result");
  resultContainer.classList.add("row");

  forecastData.forEach((data) => {
    // resultContainer.innerHTML = /*html*/ `
    //   <div class="weather-container col-7 col-sm-7 col-md-2 col-lg-2 mb-3 text-center">
    //     <div id="day-name"></div>
    //     <div id="date"></div>
    //     <div id="day-weather" class="row align-items-center">
    //       <div id="day-image" class="col image"></div>
    //       <div id="day-temp" class="col text-nowrap temperature"></div>
    //     </div>
    //     <div id="night-weather" class="row align-items-center">
    //       <div id="night-image" class="col image"></div>
    //       <div id="night-temp" class="col text-nowrap temperature"></div>
    //     </div>
    //   </div>
    // `;

    const weatherContainer = createDivEl();
    weatherContainer.classList.add("weather-container");
    weatherContainer.classList.add("col-7");
    weatherContainer.classList.add("col-sm-7");
    weatherContainer.classList.add("col-md-2");
    weatherContainer.classList.add("col-lg-2");
    weatherContainer.classList.add("mb-3");
    weatherContainer.classList.add("text-center");

    const dayName = createDivEl();
    dayName.setAttribute("id", "day-name");
    dayName.textContent = moment(data.Date).format("dddd");

    const dateValue = createDivEl();
    dateValue.setAttribute("id", "date");
    dateValue.textContent = moment(data.Date).format("MMMM DD");
    weatherContainer.appendChild(dateValue);

    const dayWeather = createDivEl();
    dayWeather.setAttribute("id", "day-weather");
    dayWeather.classList.add("row");
    dayWeather.classList.add("align-items-center");

    const dayImage = createDivEl();
    dayImage.setAttribute("id", "day-image");
    dayImage.classList.add("col");
    dayImage.classList.add("image");
    const imageDay = document.createElement("img");
    imageDay.src = `./images/${data.Day.Icon}-s.png`;

    const dayTemperature = createDivEl();
    dayTemperature.setAttribute("id", "day-temp");
    dayTemperature.classList.add("col");
    dayTemperature.classList.add("text-nowrap");
    dayTemperature.classList.add("temperature");
    dayTemperature.textContent = `${data.Temperature.Maximum.Value} °F`;

    const nightWeather = createDivEl();
    nightWeather.setAttribute("id", "night-weather");
    nightWeather.classList.add("row");
    nightWeather.classList.add("align-items-center");

    const nightImage = createDivEl();
    nightImage.setAttribute("id", "night-image");
    nightImage.classList.add("col");
    nightImage.classList.add("image");
    const imageNight = document.createElement("img");
    imageNight.src = `./images/${data.Night.Icon}-s.png`;

    const nightTemperature = createDivEl();
    nightTemperature.setAttribute("id", "night-temp");
    nightTemperature.classList.add("col");
    nightTemperature.classList.add("text-nowrap");
    nightTemperature.classList.add("temperature");
    nightTemperature.textContent = `${data.Temperature.Minimum.Value} °F`;

    weatherContainer.appendChild(dayName);
    weatherContainer.appendChild(dayWeather);

    dayImage.appendChild(imageDay);
    dayWeather.appendChild(dayImage);
    dayWeather.appendChild(dayTemperature);
    weatherContainer.appendChild(dayWeather);

    nightImage.appendChild(imageNight);
    nightWeather.appendChild(nightImage);
    nightWeather.appendChild(nightTemperature);
    weatherContainer.appendChild(nightWeather);
    resultContainer.appendChild(weatherContainer);
  });
  pageEl.appendChild(resultContainer);
}

function renderCurrentTemperature(dataTemp, dataCity) {
  const currentWeatherExisting = document.getElementById("current-weather");
  if (currentWeatherExisting) {
    currentWeatherExisting.remove();
  }

  const currentWeather = createDivEl();
  currentWeather.setAttribute("id", "current-weather");
  currentWeather.classList.add("mb-3");
  currentWeather.classList.add("text-nowrap");
  currentWeather.classList.add("text-center");
  currentWeather.classList.add("fw-bold");
  currentWeather.classList.add("fs-5");
  currentWeather.textContent = `Now in ${dataCity}: `;

  const currentTemperature = document.createElement("span");
  currentTemperature.setAttribute("id", "current-temperature");
  currentTemperature.classList.add("fw-bold");
  currentTemperature.classList.add("fs-4");
  currentTemperature.textContent = `${dataTemp[0].Temperature.Imperial.Value} °F`;
  currentWeather.appendChild(currentTemperature);
  pageEl.appendChild(currentWeather);
}

function renderNotFound() {
  const errorEl = document.createElement("h3");
  errorEl.setAttribute("id", "error-element");
  errorEl.textContent = "The city is not found";
  pageEl.appendChild(errorEl);
  cityNotFound = false;
}

function renderSelect(citiesData) {
  const existingSelectEl = document.getElementById("dropdown-cities");
  if (existingSelectEl) {
    existingSelectEl.remove();
  }
  const selectEl = document.createElement("select");
  selectEl.setAttribute("id", "dropdown-cities");
  selectEl.classList.add("class", "form-select");
  selectEl.setAttribute("multiple", true);
  const firstOption = document.createElement("option");
  firstOption.value = "Specify your choice";
  firstOption.textContent = "Specify your choice:";
  selectEl.appendChild(firstOption);
  citiesData.forEach((data) => {
    const optionEl = document.createElement("option");
    optionEl.value = `${data.LocalizedName}, ${data.AdministrativeArea.LocalizedName}, ${data.Country.LocalizedName}, ${data.Key}`;
    optionEl.textContent = `${data.LocalizedName} ${data.AdministrativeArea.LocalizedName} ${data.Country.LocalizedName}`;
    selectEl.appendChild(optionEl);
  });
  pageEl.appendChild(selectEl);
}

function createDivEl() {
  return document.createElement("div");
}

async function showDefault() {
  if (!isDefaultShown) {
    try {
      const defaultCurrentWeather = await getCurrentWeather(defaultCityData.key);
      const defaultFiveDayWeatherForecast = await get5DayWeatherForecast(
        defaultCityData.key
      );
      renderCurrentTemperature(defaultCurrentWeather, defaultCityData.city);
      renderWeatherResult(defaultFiveDayWeatherForecast.DailyForecasts);
      isDefaultShown = true
    } catch (error) {
      console.error(error);
    }
  }
}


init();

const apiKey = "GU55qCGlZhBkfMZXx5SCqQinpJxHzJNE";

export async function getCityName(inputCity) {
  const citiesUrl = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${inputCity}`;
  return await fetch(citiesUrl)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.error(error);
    });
}

export async function getCurrentWeather(key) {
  let currentUrl = `http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${apiKey}`;
  return await fetch(currentUrl)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.error(error);
    });
}

export async function get5DayWeatherForecast(key) {
  let forecastUrl = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${apiKey}`;
  return await fetch(forecastUrl)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.error(error);
    });
}

const wrapper = document.querySelector(".wrapper"),
  inputPart = document.querySelector(".input-part"),
  infoTxt = inputPart.querySelector(".info-txt"),
  inputField = inputPart.querySelector("input"),
  locationBtn = inputPart.querySelector("button"),
  weatherPart = wrapper.querySelector(".weather-part"),
  wIcon = weatherPart.querySelector("img"),
  arrowBack = wrapper.querySelector("header i");

const apiKey = "2b44e3e637d30c72e17468da9689fc76";
let api;

const btn = document.querySelector("button");

inputField.addEventListener("keyup", function (e) {
  if (e.key == "Enter" && inputField.value != "") requestApi(inputField.value);
});

btn.addEventListener("click", function (e) {
  e.preventDefault();

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const { latitude, longitude } = position.coords;
        api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
        fetchData(api);
      },
      function (error) {
        infoTxt.textContent = error.message;
        infoTxt.classList.add("error");
      }
    );
  }
});

const requestApi = function (city) {
  api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  fetchData(api);
};

const fetchData = async function (api) {
  infoTxt.textContent = "Getting weather details";
  infoTxt.classList.add("pending");
  // lets convert this to async await
  /*
  fetch(api)
    .then((response) => response.json())
    .then((data) => weatherDetails(data))
    .catch(() => {
      infoTxt.textContent = "Something went wrong. API error.";
      infoTxt.classList.replace("pending", "error");
    });
  */

  try {
    const data = await (await fetch(api)).json();

    weatherDetails(data);
  } catch (err) {
    infoTxt.textContent = "Something went wrong. API error. " + err.message;
    infoTxt.classList.replace("pending", "error");
  }
};

const weatherDetails = function (data) {
  if (data.cod == "404") {
    infoTxt.classList.replace("pending", "error");
    infoTxt.textContent = `${inputField.value} isn't a city name.`;
  }
  infoTxt.classList.remove("pending");

  const city = data.name;
  const country = data.sys.country;
  const { description, id } = data.weather[0];
  const { temp, feels_like, humidity } = data.main;

  if (id == 800) {
    wIcon.src = "assets/sunny.png";
  } else if (id >= 200 && id <= 232) {
    wIcon.src = "assets/thunder.png";
  } else if (id >= 600 && id <= 622) {
    wIcon.src = "assets/rainy.png";
  } else if (id >= 701 && id <= 781) {
    wIcon.src = "assets/windy.png";
  } else if (id >= 801 && id <= 804) {
    wIcon.src = "assets/cloudy.png";
  } else if ((id >= 500 && id <= 531) || (id >= 300 && id <= 321)) {
    wIcon.src = "assets/thunderstorm.png";
  }

  weatherPart.querySelector(".temp .numb").textContent = (temp - 273).toFixed(
    1
  );
  weatherPart.querySelector(".weather").innerText = description;
  weatherPart.querySelector(".location span").innerText = `${city}, ${country}`;
  weatherPart.querySelector(".temp .numb-2").textContent = (
    feels_like - 273
  ).toFixed(1);
  weatherPart.querySelector(".humidity span").textContent = `${humidity}%`;
  inputField.value = infoTxt.textContent = "";
  infoTxt.classList.remove("pending", "error");
  wrapper.classList.add("active");
};

arrowBack.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

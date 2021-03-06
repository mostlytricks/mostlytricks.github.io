const onGeoLoaded = (position) => {
  console.log(position);
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY_FOR_WUT}&units=metric`;
  console.log(url);
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //앞에서 리턴해서 파싱하는것 유의해두자.
      console.log(data);
      const weatherTag = document.querySelector(".weather div .climate");
      const cityTag = document.querySelector(".weather div .loc");
      const celcious = document.querySelector(".weather div .cel");
      cityTag.innerText = `${data.name}`;
      weatherTag.innerText = data.weather[0].main;
      celcious.innerText = data.main.temp;
    });
};

const onGeoError = (e) => {
  alert("Can't determine the location");
};

navigator.geolocation.getCurrentPosition(onGeoLoaded, onGeoError);

const KEY_FOR_WUT = "23b76978f6187a38f3b63c93b5797e9b";

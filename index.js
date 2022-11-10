const key = "518d449e2b71408da9523441220211";
const url = "https://api.weatherapi.com/v1";
const api_key = "4acb082a7c74866ee69b055054dff3e4";
const base_url = "https://api.openweathermap.org/data/2.5";
const img_path = "https://openweathermap.org/img/wn";

const getDate = (date) => {
  const d = new Date(date * 1000);

  return d.toLocaleDateString("en-mm", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};
const getData = async () => {
  //   const res = await fetch(`${url}/current.json?q=myeik&key=${key}`, {
  //     method: "GET",
  //     mode: "cors",
  //     headers: { "Access-Control-Allow-Origin": "*" },
  //   });
  const res = await fetch(
    `${base_url}/weather?q=myeik&units=metric&appid=${api_key}`,
    {
      method: "GET",
    }
  );
  console.log(res);
  const data = await res.json();
  console.log(data);
  if (res.ok) {

    const { name, main, weather, dt } = data;
    const dc = " &#8451;";
    document.getElementById(
      "today-icon"
    ).src = `${img_path}/${weather[0].icon}.png`;
    document.getElementById("today-condition").innerText = weather[0].main;
    document.getElementById("city-name").innerText = name;
    console.log(getDate(dt));
    document.getElementById("date").innerText = getDate(dt);
    document.getElementById("temp-c").innerText = Math.floor(main.temp);
    document.getElementById("hum_fl").innerHTML = `${
      Math.floor(main.humidity) + dc
    }/${Math.floor(main.feels_like) + dc} `;
  }
};

getData();

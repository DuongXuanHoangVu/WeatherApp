

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const btn = $('.btn')
const result = $('.result')
const input = $('.input-form')


input.focus()




function renderWeather (data) {
    let htmls = `
        <div>
            <p>Địa chỉ: ${data.name}</p>
            <p>Nhiệt độ: ${data.main.temp} độ C</p>
            <p>Thời tiết: ${data.weather[0].description}</p>
        </div>
    `
    result.innerHTML = htmls
}

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      btn.click();
    }})


btn.onclick = function () {
    let cityName = input.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=defa91d8103b32ab40cb4a299623c37c&lang=vi`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            renderWeather(data)
        })
}

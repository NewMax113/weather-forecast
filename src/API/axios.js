import axios from "axios"

let CopyDayArray = []
let dayArray = []
let hourArray = []
let hour

export default async function APIweather2(city) {
    try {
        let weather = await axios(`http://api.weatherapi.com/v1/forecast.json?key=dccb57734a2a4be890f163416241501&q=${city}&aqi=no&days=3`)
    console.log(weather)
    for (let day = 0; day < weather.data.forecast.forecastday.length; day++) {
        dayArray.push({
            city: weather.data.location.name,
            dayOrNight: weather.data.current.is_day,
            temp_now: weather.data.current.temp_c,
            temp_day: weather.data.forecast.forecastday[day].day.avgtemp_c,
            time_now: weather.data.location.localtime,
            day: weather.data.forecast.forecastday[day].date,
            wind: (weather.data.current.wind_kph / 3.9).toFixed(1),
            wind_day: (weather.data.forecast.forecastday[day].day.maxwind_kph / 3.9).toFixed(1),
            pole: weather.data.current.wind_dir,
            rain: weather.data.forecast.forecastday[day].day.daily_will_it_rain,
            snow: weather.data.forecast.forecastday[day].day.daily_will_it_snow,
            hour: testtt(day)
        })
    }

    function testtt(day) {
        for (let hour = 0; hour < 24; hour++) {
            hourArray.push({
                time: weather.data.forecast.forecastday[day].hour[hour].time,
                temp: weather.data.forecast.forecastday[day].hour[hour].temp_c,
                wind: weather.data.forecast.forecastday[day].hour[hour].wind_kph,
                pole: weather.data.forecast.forecastday[day].hour[hour].wind_dir,
                humidity: weather.data.forecast.forecastday[day].hour[hour].humidity,
                snow_now: weather.data.forecast.forecastday[day].hour[hour].will_it_snow,
                rain_now: weather.data.forecast.forecastday[day].hour[hour].will_it_rain,
                id: weather.data.forecast.forecastday[0].date_epoch
            }
            )
        }
        hour = hourArray
        hourArray = []
        return hour
    }
    CopyDayArray = dayArray
    dayArray = []
    return CopyDayArray
    }
    catch (error) {
        return [
            {
                city: '',
                dayOrNight: '',
                temp_now: '',
                temp_day: '',
                time_now: '',
                day: '',
                wind: '',
                wind_day: '',
                pole: '',
                rain: '',
                snow: '',
                hour: [{
                    time: '',
                    temp: '',
                    wind: '',
                    pole: '',
                    humidity: '',
                    snow_now: '',
                    rain_now: '',
                    id: ''
                }]
            },
        ]
    }
    
}

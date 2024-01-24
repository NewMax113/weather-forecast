import React, { useEffect, useState } from 'react'
import Card_weather from './Card_weather'
import APIweather2 from '../API/axios'
import { Search } from './search/Search'
import Background from './background/Background'

export const CardContainer = () => {
    let [city, setCity] = useState('Самара')
    let [searchCity, setSearchCity] = useState('')
    let [cityData, setCityData] = useState([
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
    ])

    let [dayActiveGlobalList, setDayActiveGlobalList] = useState()

    async function tests() {
        let z = await APIweather2(city)
        console.log(z)
        setCityData(z)
    }

    useEffect(() => {
        tests()
    }, [city])

    return (
        <>
            <Background
                cityData={cityData}
            />
            <Search
                setSearchCity={setSearchCity}
                setCity={setCity}
                searchCity={searchCity}
            />
            {cityData[0].city
                ? <Card_weather
                    day1={cityData[0]}
                    day2={cityData[1]}
                    day3={cityData[2]}
                    activeFunctionGlobalList={setDayActiveGlobalList}
                    activeDay={dayActiveGlobalList}
                    rainAndSnow={cityData[0]}
                >
                </Card_weather>
                : <></>}
        </>
    )
}

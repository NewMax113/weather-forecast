import React from 'react'
import bg_css from './bg.module.scss'
import snow from '../../pictures/snow.gif'
import rain from '../../pictures/rain.gif'

function Background({cityData}) {
    return (
        <>
            {cityData[0]
                ? (cityData[0].dayOrNight
                    ? <div className={bg_css.day}></div>
                    : <div className={bg_css.night}></div>)
                : ''}

            {cityData[0]
                ? (cityData[0].snow
                    ? <img src={snow} alt="" className={bg_css.rain} />
                    : (cityData[0].rain
                        ? <img src={rain} alt="" className={bg_css.rain} />
                        : ''))
                : ''}
        </>
    )
}

export default Background
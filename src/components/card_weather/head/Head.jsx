import React from 'react'
import card_weather from '../../card_weather.module.scss'
import {CloudImg} from './Cloudimg'


const Head = ({ activeDay, rainAndSnow }) => {


  return (
    <>
      <div className={card_weather.head}>
        <div className={card_weather.city}>{activeDay ? activeDay.city : '00'}</div>
        <CloudImg rainAndSnow={rainAndSnow}/>
        <div className={card_weather.temp}>{activeDay ? activeDay.temp_day : '00'}&deg;</div>
        <div className={card_weather.wind}>{activeDay ? activeDay.wind_day : '00'} м/c {activeDay ? activeDay.pole : '00'}</div>
      </div>

      
    </>

    
  )
}

export default Head
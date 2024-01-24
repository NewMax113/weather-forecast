import React from 'react'
import card_weather from './card_weather.module.scss'
import Head from './card_weather/head/Head'
import DayContainer from './card_weather/day/DayContainer'
import Hour from './card_weather/hour/Hour'

const Card_weather = ({ day1, day2, day3, activeDay, activeFunctionGlobalList, rainAndSnow}) => {
  return (
    <>
      <div className={card_weather.position_card}>
        <Head activeDay={activeDay} rainAndSnow={rainAndSnow}/>
        <Hour day1={day1} day2={day2} day3={day3} activeDay={activeDay}/>
        <DayContainer day1={day1} day2={day2} day3={day3} activeFunctionGlobalList={activeFunctionGlobalList}/>
      </div>
    </>

  )
}

export default Card_weather
import React, { useEffect, useState } from 'react'
import day_css from './day.module.scss'
import Day from './Day'

const DayContainer = ({ activeFunctionGlobalList, day1, day2, day3 }) => {
  let aWeek = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс', 'пн', 'вт']
  let day = new Date(day1.time_now);
  let num = day.getDay();

  let nowDay = `${aWeek[num]} ${day.getDate()}`
  let nextDay = `${aWeek[num + 1]} ${day.getDate() + 1}`
  let nextnextDay = `${aWeek[num + 2]} ${day.getDate() + 2}`

  useEffect(() => {
    activeFunctionGlobalList(day1)
    setDayActiveList(nowDay)
  }, [day1, nowDay])

  let [dayActiveList, setDayActiveList] = useState(nowDay)
  return (
    <div className={day_css.days}>
      <Day selectedDay={nowDay} day={day1} setDayActiveList={setDayActiveList} activeFunctionGlobalList={activeFunctionGlobalList} dayActiveList={dayActiveList}></Day>
      <Day selectedDay={nextDay} day={day2} setDayActiveList={setDayActiveList} activeFunctionGlobalList={activeFunctionGlobalList} dayActiveList={dayActiveList}></Day>
      <Day selectedDay={nextnextDay} day={day3} setDayActiveList={setDayActiveList} activeFunctionGlobalList={activeFunctionGlobalList} dayActiveList={dayActiveList}></Day>
    </div>
  )
}

export default DayContainer

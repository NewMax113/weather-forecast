import React, { useState, useRef, useEffect } from 'react'
import hour_css from './hour.module.scss'
import { ModalTimeContainer } from './Modal/ModalTimeContainer'
import { HourMap } from './HourMap'


const Hour = ({ day1, activeDay }) => {
  let TimesOfDay = ['Утро', 'День', 'Вечер', 'Ночь']
  let wrapRef = useRef(null)
  let [monitoringEveryHour, setMonitoringEveryHour] = useState(false)
  let [monitoringGlobal, setMonitoringGlobal] = useState('none')
  let DayRangeArray = []
  let temp_average
  let num_now = 0

  function closeModal(target) {
    if (monitoringGlobal !== target && monitoringEveryHour === true) {
      setMonitoringEveryHour(false)
    }
  }

  function handleClick(event) {
    if ((wrapRef.current) && !wrapRef.current.contains(event.target)) {
      setMonitoringGlobal('none')
      setMonitoringEveryHour(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])

  if (monitoringGlobal === 'Ночь') {
    DayRangeArray = []
    TimeCycle(0, 5)
  }
  if (monitoringGlobal === 'Утро') {
    DayRangeArray = []
    TimeCycle(6, 11)
  }
  if (monitoringGlobal === 'День') {
    DayRangeArray = []
    TimeCycle(12, 17)
  }
  if (monitoringGlobal === 'Вечер') {
    DayRangeArray = []
    TimeCycle(18, 23)
  }

  function TimeCycle(begin, end) {
    for (let num = 0; num < day1.hour.length; num++) {
      if (begin <= num && end >= num) {
        DayRangeArray.push(activeDay.hour[num].temp)
      }
    }
    DayRangeArray.map((element) => num_now += element)
    temp_average = (num_now / DayRangeArray.length).toFixed(1)
  }

  return (
    <>
      <div ref={wrapRef}>
        <div className={hour_css.hour} >
          {TimesOfDay.map((TimesOfDay, index) =>
            <HourMap
              setMonitoringGlobal={setMonitoringGlobal}
              setMonitoringEveryHour={setMonitoringEveryHour}
              monitoringGlobal={monitoringGlobal}
              closeModal={closeModal}
              TimesOfDay={TimesOfDay}
              temp_average={temp_average}
            />)}
        </div>
        <ModalTimeContainer
          day1={day1}
          monitoring={monitoringGlobal}
          activeDay={activeDay}
          monitoringEveryHour={monitoringEveryHour}
        />
      </div>
    </>
  )
}

export default Hour
import React from 'react'
import hour_css from './hour.module.scss'

export const CardEveryHour = ({monitoringGlobal, TimesOfDay, setMonitoringGlobal, closeModal, setMonitoringEveryHour, arrow, temp_average}) => {
  return (
    <>
      <button
        onClick={() => {
          monitoringGlobal === TimesOfDay
            ? setMonitoringGlobal('none')
            : setMonitoringGlobal(TimesOfDay); closeModal(TimesOfDay);
        }}
        className={arrow ? hour_css.arrowOn : hour_css.arrowOff}
      >{TimesOfDay}
      </button>
      <div
        className={monitoringGlobal === TimesOfDay
          ? hour_css.weatherDay
          : `${hour_css.weatherDay} ${hour_css.weatherDayDis}`}>
        {temp_average ? temp_average : '00'}&deg;
        <button
          onClick={() => setMonitoringEveryHour(true)}>
          Открыть
        </button>
      </div>
    </>
  )
}

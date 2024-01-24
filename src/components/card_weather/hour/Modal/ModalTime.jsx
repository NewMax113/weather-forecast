import React from 'react'
import modal_css from './modal.module.scss'


export const ModalTime = ({ activeDay, SetEveryHourOnClick, everyHour, DayRangeArray }) => {
    return (
        <>
            <div className={modal_css.data}>{activeDay ? activeDay.day : ''}</div>
            <div className={modal_css.temp_day}>Температру: {activeDay ? activeDay.temp_day : ''}&deg;</div>
            <div className={modal_css.HourAndList}>
                <div className={modal_css.span}>
                    {DayRangeArray.map((x) => <span className={modal_css.hour} onClick={() => SetEveryHourOnClick(x)}> {x} </span>)}
                </div>
                <div className={modal_css.list}>
                    <div className={modal_css.temp_hour}>Температура в {everyHour.time_now}: {everyHour.temp}&deg;</div>
                    <div className={modal_css.wind}>Скорость ветра: {everyHour.wind}м/с {everyHour.pole}</div>
                    <div className={modal_css.humidity}>Влажнсть: {everyHour.humidity}</div>
                    <div className={modal_css.snow}>Снег: {everyHour.snow_now}</div>
                    <div className={modal_css.rain}>Дождь: {everyHour.rain_now}</div>
                </div>

            </div>

        </>
    )
}

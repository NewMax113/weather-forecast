import React from 'react'
import day_css from './day.module.scss'

function Day({ setDayActiveList, activeFunctionGlobalList, selectedDay, day, dayActiveList }) {
    return (
        <span
            className={dayActiveList == selectedDay ? `${day_css.active} ${day_css.day}` : day_css.day_passive}
            onClick={() => {
                setDayActiveList(selectedDay);
                activeFunctionGlobalList(day)
            }}>
            {selectedDay}
        </span>
    )
}

export default Day
import React, { useEffect, useState } from 'react'
import hour_css from './hour.module.scss'
import { CardEveryHour } from './CardEveryHour'

export const HourMap = ({ setMonitoringGlobal, setMonitoringEveryHour, monitoringGlobal, closeModal, TimesOfDay, temp_average }) => {
    let [arrow, setArrow] = useState(true)

    useEffect(() => {
        if (monitoringGlobal === TimesOfDay) {
            setArrow(false)
        } else {
            setArrow(true)
        }

    }, [monitoringGlobal])

    return (
        <span>
            <CardEveryHour
                monitoringGlobal={monitoringGlobal}
                TimesOfDay={TimesOfDay}
                setMonitoringGlobal={setMonitoringGlobal}
                closeModal={closeModal}
                setMonitoringEveryHour={setMonitoringEveryHour}
                arrow={arrow}
                temp_average={temp_average}
            />
        </span>
    )
}

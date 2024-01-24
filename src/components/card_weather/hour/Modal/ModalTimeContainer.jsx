import React, { useEffect, useState } from 'react'
import hour_css from '../hour.module.scss'
import { ModalTime } from './ModalTime'


export const ModalTimeContainer = ({ day1, monitoring, activeDay, monitoringEveryHour }) => {
    let [everyHour, setEveryHour] = useState({
        time: '',
        temp: '',
        wind: '',
        pole: '',
        humidity: '',
        snow_now: '',
        rain_now: ''
    })
    let DayRangeArray = []
    let timelet

    if (monitoring === 'Ночь') {
        DayRangeArray = []
        TimeCycle(0, 5)
    }
    if (monitoring === 'Утро') {
        DayRangeArray = []
        TimeCycle(6, 11)
    }
    if (monitoring === 'День') {
        DayRangeArray = []
        TimeCycle(12, 17)
    }
    if (monitoring === 'Вечер') {
        DayRangeArray = []
        TimeCycle(18, 23)
    }

    function TimeCycle(begin, end) {
        for (let num = 0; num < day1.hour.length; num++) {
            if (begin <= num && end >= num) {
                timelet = day1.hour[num].time.split('').reverse()
                DayRangeArray.push([timelet[0], timelet[1], timelet[2], timelet[3], timelet[4]].reverse())
            }
        }
    }

    useEffect(() => {
        if (!monitoringEveryHour) {
            setEveryHour({
                time: '...',
                temp: '...',
                wind: '...',
                pole: '',
                humidity: '...',
                snow_now: '...',
                rain_now: '...'
            })
        }
    }, [monitoringEveryHour])

    function SetEveryHourOnClick(element) {
        let ElementHourArray = Number(element[0] + element[1])
        let time_now = element.join('')
        setEveryHour({
            time: activeDay.hour[ElementHourArray].time,
            time_now: time_now,
            temp: activeDay.hour[ElementHourArray].temp,
            wind: activeDay.hour[ElementHourArray].wind,
            pole: activeDay.hour[ElementHourArray].pole,
            humidity: activeDay.hour[ElementHourArray].humidity,
            snow_now: activeDay.hour[ElementHourArray].snow_now == 1 ? 'Да' : 'Нет',
            rain_now: activeDay.hour[ElementHourArray].rain_now== 1 ? 'Да' : 'Нет'
        })
    }
    
    return (
        <div className={monitoringEveryHour ? hour_css.modalVisible : `${hour_css.modalVisible} ${hour_css.modalVisibleDis}`}>
            <ModalTime
                activeDay={activeDay}
                SetEveryHourOnClick={SetEveryHourOnClick}
                everyHour={everyHour}
                DayRangeArray={DayRangeArray}
            />
        </div>
    )
}

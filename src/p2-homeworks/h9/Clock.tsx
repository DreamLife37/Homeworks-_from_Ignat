import React, {useState} from 'react'
import SuperButton from '../h3/SuperButton'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearTimeout(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    console.log(timerId)
    console.log(date)

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
        // close
    }

    const stringTime = date.toLocaleString('ru', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    })// fix with date

    const stringDate = date.toLocaleString('ru', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
    }) // fix with date


    return (
        <div className={s.clock}>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock

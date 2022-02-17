import React from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (el: string) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : '' // need to fix with (?:)

    return (
        <div>
            <input value={name} onChange={e => setNameCallback(e.currentTarget.value)} className={inputClass}/>
            <div><span>{error}</span></div>
            <button onClick={addUser} disabled={!name}>add</button>
            <span className={s.count}>All students: {totalUsers}</span>
        </div>
    )
}

export default Greeting

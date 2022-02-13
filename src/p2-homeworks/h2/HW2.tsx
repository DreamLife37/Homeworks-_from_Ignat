import React, {useState} from 'react'
import Affairs from './Affairs'
import s from "./Affairs.module.css";
// import {constants} from "os";
// import priority = module

// types
export type AffairPriorityType = any // need to fix any
export type AffairType = any // need to fix any
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: any = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

//pure helper functions
export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => { // need to fix any
    if (filter === 'all') return affairs;
    else return affairs.filter((a: AffairType) => a.priority === filter);
}

export const deleteAffair = (affairs: any, _id: any): any => { // need to fix any
    return affairs.filter((a: { _id: any }) => (a._id !== _id)) // need to fix
    debugger
    console.log(affairs)
}

function HW2() {
    const [affairs, setAffairs] = useState<any>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: any) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    return (
        <div className={s.content}>
            <hr/>
            homeworks 2
            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2

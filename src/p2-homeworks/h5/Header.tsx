import React from 'react'
import {PATH} from "./Routes";
import s from './HW5.module.css'
import {NavLink} from "react-router-dom";


function Header() {
    return (<div className={s.header}>

            <div className={`${s.item} ${s.activeLink}`}><NavLink to={PATH.PRE_JUNIOR}
                                                                  className={({isActive}) => isActive ? `${s.activeLink}` : `${s.item}`}> PRE
                JUNIOR </NavLink>
            </div>

            <div className={`${s.item} ${s.activeLink}`}><NavLink to={PATH.JUNIOR}
                                                                  className={({isActive}) => isActive ? `${s.activeLink}` : `${s.item}`}> JUNIOR </NavLink>
            </div>

            <div className={`${s.item} ${s.activeLink}`}><NavLink to={PATH.JUNIOR_PLUS}
                                                                  className={({isActive}) => isActive ? `${s.activeLink}` : `${s.item}`}> JUNIOR
                PLUS</NavLink>
            </div>

            <div className={s.block}/>

        </div>

    )
}

export default Header

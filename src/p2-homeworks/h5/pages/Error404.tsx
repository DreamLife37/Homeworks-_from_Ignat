import React from 'react'
import s from './../HW5.module.css'
import {NavLink} from "react-router-dom";
import {PATH} from "../Routes";

function Error404() {
    return (
        <div className={s.pageError}>
            <div>404</div>
            <div>Page not found!</div>
            <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>

            <h4>Упс!</h4> Что-то пошло не так, этой страницы не существует. Вы можете вернуться на главную страницу.

            <div className={s.item}><NavLink to={PATH.PRE_JUNIOR}>Main Page</NavLink>
            </div>
            <img src={"https://cdn-icons-png.flaticon.com/512/755/755014.png"}/>

        </div>
    )
}

export default Error404

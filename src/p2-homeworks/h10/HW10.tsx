import React from 'react'
import SuperButton from '../h3/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from './bll/store';
import {loadingAC, loadingType} from './bll/loadingReducer';
import animation from './../../animation.gif'
import style from './HW10.module.css'

function HW10() {
    // useSelector, useDispatch
    const isLoading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    const dispatch = useDispatch()
    const setLoading = () => {
        // dispatch
        // setTimeout
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000);
        dispatch(loadingAC(true))
        console.log('loading...')
    };


    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {isLoading
                ? (
                    <img className={style.animation} src={animation}/>
                    //<div>крутилка...</div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10

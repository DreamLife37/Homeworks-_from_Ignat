import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {changeThemeC} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some', 'yellow'];

type ThemeType = string

function HW12() {
    const theme = useSelector<AppStoreType, ThemeType>(store => store.theme.theme); // useSelector

    const dispatch = useDispatch()

    const onChangeCallback = (newTheme: string) => {
        dispatch(changeThemeC(newTheme))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
                <SuperSelect options={themes}
                             value={theme}
                             onChangeOption={onChangeCallback}/>
            </span>
            <hr/>
        </div>
    );
}

export default HW12;

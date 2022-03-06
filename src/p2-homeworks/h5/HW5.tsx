import React from 'react'
import Header from './Header'

import {HashRouter} from "react-router-dom";
import Router from "./Routes";

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

                <Header/>

                <Router/>

            </HashRouter>
        </div>
    )
}

export default HW5

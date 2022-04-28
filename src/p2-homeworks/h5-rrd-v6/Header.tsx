import React from 'react'
import {NavLink} from "react-router-dom";
import style from './NavLink.module.css'

function Header() {

    return (
        <div>
            <div className={style.box}>наведи мышь</div>
            <div className={style.container}>
                <NavLink className={`${style.firstLink} ${style.link}`} to={'/PreJunior'}>PreJunior </NavLink>
                <NavLink className={`${style.secondLink} ${style.link}`} to={'/Junior'}>Junior </NavLink>
                <NavLink className={`${style.thirdLink} ${style.link}`} to={'/JuniorPlus'}>JuniorPlus </NavLink>
            </div>
        </div>

    )
}

export default Header

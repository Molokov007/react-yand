import React, { useState } from "react";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import style from './header.module.css';
import {Link} from 'react-scroll';

function Header (){
    const [nav, setNav] = useState(false);




    return(
        <div className={style.shap}>
        <div className={style.header}>
        <div className={style.logo}>
        <a href="."><img src='../img/g16.png' alt=''/></a>
        <div className={style.logo__des}>
        <p>Официальный партнер <br/>г.Омск</p>
        </div>
        </div>
        <div className={
            nav ? [style.menu, style.active].join(' ') : [style.menu]
        }>
            <Link activeClass="active" to="card" spy={true} smooth={true}>Выбрать авто</Link>
            <Link to="job" spy={true} smooth={true}>Начало работы</Link>
            <Link to="plasejob" spy={true} smooth={true}>Преимущества работы</Link>
            <Link to="plasemobile" spy={true} smooth={true}>Приложение</Link>
            <Link to="contacs" spy={true} smooth={true}>Контакты</Link>
        </div>
        <div className={
            nav ? [style.contact, style.active].join(' ') : [style.contact]
        }>
            <h1>8 (3812) 49-46-45</h1>
            <a href=".">заказать звонок</a>
        </div>
        <div onClick={()=>setNav(!nav)} className={style.mobile__btn}>
            {nav ? <AiOutlineClose size={22}/>:<AiOutlineMenu size={22}/>}
        </div>
    </div>
    </div>
    )
}

export default Header;
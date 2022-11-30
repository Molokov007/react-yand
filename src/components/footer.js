import React from "react";
import style from "./footer.module.css";
import {Link} from "react-scroll";


function Footer(){

   

    return(
       <footer>
        <div className={style.text}>
            <div className={style.nalog}>
                <p className={style.pad}>Официальный партнер Яндекс Такси<br/> г.Омск</p>              
                <p>ОГРНИП 12345432112344</p>
            </div>
            <div className={style.navb}>
            <Link to="job" spy={true} smooth={true}>Начало работы</Link>
            <Link to="plasejob" spy={true} smooth={true}>Преимущества работы</Link>
            <Link>Отзывы</Link>
            <Link to="plasemobile" spy={true} smooth={true}>Приложение</Link>
            <Link to="contacs" spy={true} smooth={true}>Контакты</Link>
            </div>
            <div className={style.pol}>
            <a href='.'>Политика конфиденциальности</a>
            </div>

        </div>

       </footer>
    )
}

export default Footer;
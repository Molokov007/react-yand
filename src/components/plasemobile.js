import React from "react";
import style from './plasemobile.module.css';

function Plasemobile(){
    return(
        <div id="plasemobile" className={style.plase}>           
            <div className={style.text_plase}>

            <div className={style.text_plase_color}>
                <div className={style.text_plase_con1}>
                <h1>Мобильное приложение</h1>
                <p>Мы разработали мобильное приложение для того,
                    чтобы вам было удобно!</p>
                </div>
                <div className={style.text_plase_but}>
                    <a target="_blank" rel="noopener noreferrer" href="https://taxi.yandex.ru/">
                    <img src="../img/google.png" alt=''/>
                    </a>
                </div>
            </div>
            <div className={style.imeg}>
            <img src="../img/map.png" alt=''/>
            </div>


                


            </div>
        </div>
    )
}

export default Plasemobile;
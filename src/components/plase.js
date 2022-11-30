import React from "react";
import style from './plase.module.css';
import {Link} from 'react-scroll';

function Plase(){
    return(
        <div className={style.plase}>
            
            <div className={style.text_plase}>
                <div className={style.text_plase_con1}>
                <h1>Водитель такси<br/>на сменный график</h1>
                <p>з/п от 25 000 руб до 50 000 руб</p>
                </div>
                <div className={style.text_plase_con2}>
                <h1>Аренда автомобилей</h1>
                <p>от 1200 руб/сутки</p>
                </div>
                <div className={style.text_plase_but}>
                <Link to="form" spy={true} smooth={true}>Заполнить анкету</Link>
                </div>

            </div>
        </div>
    )
}

export default Plase;
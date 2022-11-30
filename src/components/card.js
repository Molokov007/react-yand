import React from "react";
import style from "./card.module.css"
import Propscard from "./propscard";

function Card(){
    return(
        <div id="card" className={style.card}>
            <div className={style.card_con}>
                <h1>Выберите автомобиль</h1>
                <div className={style.card_car}>
                    <Propscard img="../img/car1.png" name="Chevrolet Lanos" price="1 000 руб./сутки"/>
                    <Propscard img="../img/car2.png" name="Renault Logan" price="1 000 руб./сутки (1 поколение)" price2=<p>1 500 руб./сутки (2 поколение)</p>/>
                    <Propscard img="../img/car3.png" name="Hyundai Accent" price="1 200 руб./сутки"/>
                    <Propscard img="../img/car4.png" name="Nissan Almera" price="1 500 руб./сутки"/>
                </div>                
            </div>
        </div>
    )
}

export default Card;
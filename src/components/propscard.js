import React from "react";
import style from "./card.module.css";

function Propscard(props){
    return(
        <div className={style.car}>           
            <img src={props.img} alt=""/>
            <div className={style.car_text}>
                <div className={style.car_text_ar}>
                    <a href=".">{props.name}</a>
                </div>
                <div className={style.car_text_price}>
                    <p>{props.price}</p>
                    {props.price2}
                </div>
            </div>
            <a href=".">Арендовать</a>
        </div>
    )
}

export default Propscard;
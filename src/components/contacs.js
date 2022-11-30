import React from "react";
import style from "./contacs.module.css";

function Contacs(){
    return(
        <div id="contacs" className={style.contacs}>
            <div className={style.text_contacs}>
                <h1>Контакты</h1>
                <div className={style.contacs_con}>

                    <div className={style.contacs_item}>
                        <div className={style.item}>
                        <img src="../img/whatsapp.png" alt="" width={20} height={20}/>
                        <h2>Написать в What's App</h2>
                        </div>
                        <div className={style.item2}>
                        <img src="../img/viber.png" alt=""/>
                        <h2>Написать в Viber</h2>
                        </div>
                    </div>

                    <div className={style.contacs_item}>
                        <div className={style.item}>
                        <p>тел.:</p>
                        <h2>8 (3812) 49-46-45</h2>
                        </div>
                        <div className={style.item2}>
                        <p>тел.:</p>
                        <h2>8 (903) 00-00-00</h2>
                        </div>
                    </div>

                    <div className={style.contacs_item}>
                        <div className={style.item}>
                        <p>Email:</p>
                        <h2>info@taxi.ru</h2>
                        </div>
                        <div className={style.item2}>
                        <p>Офис:</p>
                        <h2>г.Омск, ул.Дмитриева 15/1</h2>            
                        </div>
                        <a href=".">Показать на карте</a>
    
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Contacs;
import React from "react";
import style from './plasejob.module.css';

function Plasejob(){
    return(
        <div id='plasejob' className={style.plase}>
            
            <div className={style.text_plase}>
                <div className={style.text_plase_con1}>
                <h1>Работа в удовольствии</h1>
                </div>
                <div className={style.text_plase_con2}>
                    <div className={style.plase_comment}>
                    <img src="../img/job1.png" alt='' height={20}/>
                    <div className={style.text_plase_comment}>
                        <h2>Удобный график</h2>
                        <p>Работа по несколько часов в неделю или каждый день - вы сами выбираете свой график</p>
                    </div>
                    </div>

                    <div className={style.plase_comment}>
                    <img src="../img/job2.png" alt='' height={20}/>
                    <div className={style.text_plase_comment}>
                        <h2>Деньги - сразу</h2>
                        <p>Выводите деньги с помощью удобного мобильного приложения</p>
                    </div>
                    </div>

                    <div className={style.plase_comment}>
                    <img src="../img/job3.png" alt='' height={20}/>
                    <div className={style.text_plase_comment}>
                        <h2>Партнерская программа</h2>
                        <p>Скидка 20% на ремонт и сервисное обслуживание для водителей парка</p>
                    </div>
                    </div>                              
                </div>
            </div>
        </div>
    )
}

export default Plasejob;
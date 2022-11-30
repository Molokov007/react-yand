import React from "react";
import style from "./job.module.css";
import {Link} from "react-scroll";

function Job(){
    return(
        <div id="job" className={style.job}>
            <div className={style.job_con}>
                <h1>Начало работы</h1>
                <div className={style.inst}>

                    <div className={style.inst_con}>
                        <div className={style.inst_ul}>
                            <h2>1.</h2>
                            <p><Link to="form" spy={true} smooth={true}>Оставьте заявку</Link> на сайте</p>
                        </div>
                        <div className={style.inst_text}>
                            <p>мы свяжемся с вами для уточнения деталей</p>
                        </div>
                    </div>

                    <div className={style.inst_con}>
                        <div className={style.inst_ul}>
                            <h2>2.</h2>
                            <p><Link to="plasemobile" spy={true} smooth={true}>Скачайте</Link> приложение</p>
                        </div>
                        <div className={style.inst_text}>
                                <p>для удобного вывода средств</p>
                        </div>
                    </div>

                    <div className={style.inst_con}>
                        <div className={style.inst_ul}>
                            <h2>3.</h2>
                            <p>Выходите на линию</p>
                        </div>
                        <div className={style.inst_text}>
                                <p>чтобы получить первые заказы</p>
                        </div>
                    </div>

                    <div className={style.inst_con}>
                        <div className={style.inst_ul}>
                            <h2>4.</h2>
                            <p>Начните зарабатывать</p>
                        </div>
                        <div className={style.inst_text}>
                                <p>работайте тогда, когда вам удобно</p>
                        </div>
                    </div>
                    

                    


                </div>
            </div>
        </div>
    )
}


export default Job;
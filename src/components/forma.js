import style from "./forma.module.css";
import emailjs from "emailjs-com";


function Forma(){

    function sendEmail(e) {
        e.preventDefault();    
    
        emailjs.sendForm('service_qiuf2a8', 'template_q32ajuf', e.target, 'UCX63AgFRoGozJYNx')
          .then((result) => {
              window.location.reload()  
          }, (error) => {
              console.log(error.text);
          });
      }
    

    
    

    return(
        <div className={style.plase}>
            
            <div id="form" className={style.text_plase}>
                <h1>Оставить заявку</h1>
                <form className={style.con_form} onSubmit={sendEmail}>
                <label>ФИО</label>
                <input type="text" height={45} name="name" required placeholder="Иванов Иван Иванович" pattern="[А-Яа-я]*?\s[А-Яа-я]*?\s[А-Яа-я]*?"/>
                <label>Телефон</label>    
                <input type="tel" height={45} name="number" required placeholder="+7 (xxx) xxx-xx-xx" pattern="[\+]\d{1}\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}" />
                <div className={style.but_form}>
                <input type="submit" value="Отправить" />
                <p>Нажимая кнопку, вы соглашаетесь с <a href=".">политикой конфиденциальности</a></p>
                </div>
                </form>            

            </div>
        </div>
    )
}

export default Forma;
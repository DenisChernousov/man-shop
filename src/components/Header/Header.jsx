import React from "react";
import './Header.module.css';
import style from "./Header.module.css";
import PHONE from "../../img/phone.svg";
import LOGIN from "../../img/login-icon.svg";

function Header() {
    return (
        <header className="header">
            <div className="container">
            <div className={style.inner}>

                    <div className={style.info}>
                        <div className={style.img}>
                            <img src={PHONE} className={style.imgItem}/>
                        </div>
                        <div className={style.phone}>
                            <a href="tel:8 (812) 123-45-67" className={style.link}> 8 (812) 123-45-67 </a>
                        </div>
                        <div className={style.delay}>
                            |
                        </div>
                        <div className={style.weak}> Работаем 7 дней в неделю</div>
                        <div className={style.delay}>
                            |
                        </div>
                        <div className={style.timeWork}>
                            9:00 — 18:00
                        </div>
                    </div>
                    <div className={style.login}>
                        <a href="#" className={style.link}><img src={LOGIN} className={style.loginIcon}/>Войти / Регистрация</a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;

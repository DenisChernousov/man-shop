import React from "react";
import style from "./About.module.css";
import BRAND from "../../img/brand.png";

function About(props) {
    return (

        <section className={style.about}>
            <div className="container">
                <div className={style.inner}>
                    <div className={style.info}>
                        <div className={style.title}>
                            О магазине
                        </div>
                        <div className={style.text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus
                            tortor lectus nunc nulla nibh. Egestas amet consectetur vel vitae aliquam dictum
                            suspendisse. Lobortis eget consequat, tellus et et sed turpis. Pretium quisque vitae, amet,
                            porttitor odio ultricies massa pharetra leo. Et ipsum urna fames in sit mi ultrices nisi,
                            nunc.
                        </div>
                    </div>
                    <div className={style.categories}>
                        <div className={style.title}>
                            Категории
                        </div>
                        <div className={style.catInner}>
                            <a href="#">часы</a>
                            <a href="#">браслеты</a>
                            <a href="#">ремни</a>
                            <a href="#">ювелирные изделия</a>
                            <a href="#">запонки</a>
                        </div>
                    </div>
                    <div className={style.spam}>
                        <div className={style.title}>
                            Рассылка
                        </div>
                        <div className={style.text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh.
                        </div>
                        <div className={style.form}>
                            <input className={style.mail} placeholder="Ваша почта..." type="email" />
                            <button>
                                Подписаться
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default About;

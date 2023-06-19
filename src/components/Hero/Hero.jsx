import React from "react";
import './Hero.module.css';
import style from "./Hero.module.css";
import BASKET from "../../img/basket-icon.svg";
import SEARCH from "../../img/search-icon.svg";

function Hero() {
    return (
        <section className={style.hero}>
            <div className="container">
                <div className={style.inner}>
                    <div className={style.logo}>
                        <div className={style.title}>
                            <h1> PORTEN </h1>
                        </div>
                        <div className={style.line}></div>
                        <div className={style.subtitle}>
                            <span>санкт-петербург</span>
                        </div>
                    </div>
                    <div className={style.info}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus interdum purus, est tortor
                        pulvinar
                        ut in. Fringilla a diam enim sed justo, sed iaculis sagittis. Tortor id eu interdum nec ut
                        iaculis.
                        Penatibus ullamcorper ultricies morbi ipsum sem metus pharetra, mi. Tortor nibh magna feugiat id
                        nunc, dui nisl viverra.
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;

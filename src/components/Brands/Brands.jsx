import React from "react";
import style from "./Brands.module.css";
import BRAND from "../../img/brand.png";

function Brands(props) {
    return (

        <section className={style.brands}>
            <div className="container">
                <div className={style.inner}>
                    <div className={style.title}>
                        наши бренды
                    </div>
                    <div className={style.line}></div>
                    <div className={style.items}>
                        <img className={style.img} src={BRAND}/>
                        <img className={style.img} src={BRAND}/>
                        <img className={style.img} src={BRAND}/>
                        <img className={style.img} src={BRAND}/>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Brands;

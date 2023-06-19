import React from "react";
import './new.module.css';
import style from "./new.module.css";
import SWATCH from "../../img/swatch.png";
import ItemNew from "./ItemNew/ItemNew";

function New(props) {

    return (
        <section className={style.new}>
            <div className={style.inner}>
                <div className={style.title}>
                    новые поступления
                </div>
                <div className={style.line}></div>
                <div className={style.catalog}>
                    <ItemNew />
                    <ItemNew />
                    <ItemNew />
                    <ItemNew />
                    <ItemNew />
                    <ItemNew />
                    <ItemNew />
                    <ItemNew />
                </div>
            </div>
        </section>
    );
}

export default New;

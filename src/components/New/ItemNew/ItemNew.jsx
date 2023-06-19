import React from "react";
import style from "./ItemNew.module.css";
import SWATCH from "../../../img/swatch.png";

function ItemNew(props) {
    return (

        <div className={style.item}>
            <div className={style.img}>
                <img src={SWATCH}/>
            </div>
            <div className={style.name}>
                Louis XVI ATHOS
            </div>
            <div className={style.price}>
                165 000 руб.
            </div>
        </div>

    );
}

export default ItemNew;

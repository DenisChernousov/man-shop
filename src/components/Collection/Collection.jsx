import React from "react";
import './collection.module.css';
import style from "./collection.module.css";
import SWATCH from "../../img/swatch.png";

function Collection() {

    const items = [
        {
            img: SWATCH,
            name: "Louis XVI ATHOS",
            cost: "165 000 руб.",
            href: "/"
        },
        {
            img: SWATCH,
            name: "Louis XVI ATHOS",
            cost: "165 000 руб.",
            href: "/"
        },
        {
            img: SWATCH,
            name: "Louis XVI ATHOS",
            cost: "165 000 руб.",
            href: "/"
        }

    ]

    return (
        <section className={style.collection}>
            {/*<div className="container">*/}
            <div className={style.inner}>
                <div className={style.season}>
                    <div className={style.title}>
                        СЕЗОН 2020/21
                    </div>
                    <div className={style.line}>

                    </div>
                    <div className={style.items}>
                        {
                            items.map(item =>
                                <div className={style.item}>
                                    <a href={item.href}>
                                        <div className={style.img}>
                                            <img src={item.img}/>
                                        </div>
                                        <div className={style.name}>
                                            {item.name}
                                        </div>
                                        <div className={style.price}>
                                            {item.cost}
                                        </div>
                                    </a>
                                </div>)
                        }


                        {/*<div className={style.item}>*/}
                        {/*    <div className={style.img}>*/}
                        {/*        <img src={SWATCH}/>*/}
                        {/*    </div>*/}
                        {/*    <div className={style.name}>*/}
                        {/*        Louis XVI ATHOS*/}
                        {/*    </div>*/}
                        {/*    <div className={style.price}>*/}
                        {/*        165 000 руб.*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className={style.item}>*/}
                        {/*    <div className={style.img}>*/}
                        {/*        <img src={SWATCH}/>*/}
                        {/*    </div>*/}
                        {/*    <div className={style.name}>*/}
                        {/*        Louis XVI ATHOS*/}
                        {/*    </div>*/}
                        {/*    <div className={style.price}>*/}
                        {/*        165 000 руб.*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className={style.item}>*/}
                        {/*    <div className={style.img}>*/}
                        {/*        <img src={SWATCH}/>*/}
                        {/*    </div>*/}
                        {/*    <div className={style.name}>*/}
                        {/*        Louis XVI ATHOS*/}
                        {/*    </div>*/}
                        {/*    <div className={style.price}>*/}
                        {/*        165 000 руб.*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>

                </div>
                <div className={style.newCollection}>
                    <div className={style.titleCollection}>Новая коллекция</div>
                    <div className={style.line}></div>
                    <div className={style.link}>
                        <a href="#">Каталог</a>
                    </div>
                </div>
            </div>
            {/*</div>*/}
        </section>
    );
}

export default Collection;

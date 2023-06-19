import React, {useState} from "react";
import './Navbar.module.css';
import style from "./Navbar.module.css";
import BASKET from "../../img/basket-icon.svg";
import SEARCH from "../../img/search-icon.svg";
import Burger from "./Burger/Burger";
import Menu from "./Burger/Menu/Menu";


function Navbar() {
    const [menuActive, setMenuActive] = useState(false);
    const items = [
        {
            value: "Понравилось",
            href: "/"
        },
        {
            value: "личный кабинет",
            href: "/"
        },
        {
            value: "настройки",
            href: "/"
        },

    ]
    return (
        <nav className="nav">
            <div className="container">
                <div className={style.inner}>
                    <div className={style.logo}>
                        <a href="#">PORTEN</a>
                    </div>
                    <div className={style.menu}>
                        <ul className={style.links}>

                            {
                                items.map(item =>
                                    <li className={style.link}>
                                        <a href={item.href}>{item.value}</a>
                                    </li>)
                            }

                            <li className={style.basket}><a href="#"><img src={BASKET}/></a></li>
                            <li className={style.search}><a href="#"><img src={SEARCH}/></a></li>
                        </ul>
                    </div>
                    <div className={style.burgerBtn} onClick={() => setMenuActive(!menuActive)}>
                        <span/>
                    </div>
                </div>
                <Menu active={menuActive} setActive={setMenuActive} items={items}/>
            </div>
        </nav>
    );
}

export default Navbar;

import React from "react";
import './Burger.module.css';
import style from "./Burger.module.css";

const Burger = ({items, active, setActive}) => {
    return (
        <div>
            <div className={active ? 'burgerBtn active' : 'burgerBtn'} onClick={()=>setActive(true)} >
                <span/>
            </div>
        </div>

    );
}

export default Burger;

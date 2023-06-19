import React from "react";
import './old.module.css';
import style from "./old.module.css";

function Old() {
    return (
        <section className={style.old}>
            <div className={style.inner}>
                <div className={style.leftSection}>
                </div>
                <div className={style.rightSection}>
                    <div className={style.title}>
                        коллекция 2018
                    </div>
                    <div className={style.line}></div>
                    <div className={style.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non rutrum ornare ut mattis habitant
                        dui arcu. Sagittis amet nunc ut neque quis nibh arcu. Vivamus vestibulum nisi et venenatis sed
                        scelerisque magna consectetur. Amet convallis quis gravida facilisis vulputate. Faucibus
                        facilisi habitasse ipsum interdum dictum aliquet. Velit quis ullamcorper pulvinar nulla
                        malesuada integer. Aenean praesent viverra nulla nullam natoque volutpat curabitur auctor.
                        Viverra viverra ullamcorper scelerisque risus dignissim egestas. Id aliquam a aliquam egestas
                        leo orci pharetra sed diam.
                    </div>
                    <div className={style.link}>
                        <a href="#">Посмотреть коллекцию</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Old;

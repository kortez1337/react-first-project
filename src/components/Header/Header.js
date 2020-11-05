import React from "react";
import s from "../Header/Header.module.css";

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.header_inner}>
                <div className={s.logo}>
                    <a href="#">
                        <img src="./../img/logo.jpg" alt=""></img>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;

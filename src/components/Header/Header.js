import React from "react";
import s from "../Header/Header.module.css";

const Header = () => {
    return (
        <header className={s.header}>
            <div className="container">
                <div className={s.header_inner}>
                    <div className={s.logo}>
                        <a href="#">Kortez</a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

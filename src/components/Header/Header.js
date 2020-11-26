import React from "react";
import { NavLink } from "react-router-dom";
import s from "../Header/Header.module.css";

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className="container">
                <div className={s.header_inner}>
                    <div className={s.logo}>
                        <a href="#">Kortez</a>
                    </div>
                    <div className={s.auth}>
                        {props.isAuth ? (
                            <div className={s.login}>
                                <div className={s.login_name}>
                                    {props.login}
                                </div>
                                <div className={s.logout}>
                                    <button onClick={props.logout}>
                                        Logout
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <NavLink to="/login" />
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

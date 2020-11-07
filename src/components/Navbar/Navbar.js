import React from "react";
import { NavLink } from "react-router-dom";
import s from "../Navbar/Navbar.module.css";
import Friends from "../Navbar/Friends/Friends";

const Navbar = (props) => {
    return (
        <div className={s.navbar_wrapper}>
            <div className={s.navbar}>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/profile" activeClassName={s.active}>
                                Моя страница
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dialogs" activeClassName={s.active}>
                                Диалоги
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/news" activeClassName={s.active}>
                                Новости
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/music" activeClassName={s.active}>
                                Музыка
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/settings" activeClassName={s.active}>
                                Настройки
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <Friends friends={props.state.friends}></Friends>
        </div>
    );
};

export default Navbar;

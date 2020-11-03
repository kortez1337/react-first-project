import React from "react";
import s from "../Navbar/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={s.navbar}>
      <nav>
        <ul>
          <li>
            <a href="#">Моя страница</a>
          </li>
          <li>
            <a href="#">Друзья</a>
          </li>
          <li>
            <a href="#">Группы</a>
          </li>
          <li>
            <a href="#">Настройки</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

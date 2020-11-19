import React from "react";
import preloader from "../../../assets/img/preloader.svg";
import s from "../Preloader/Preloader.module.css";

let Preloader = (props) => {
    return (
        <div className={s.preloader}>
            <img src={preloader} />
        </div>
    );
};

export default Preloader;

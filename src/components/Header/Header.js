import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className="main_top_reklam"></div>
            <div className="top_header">
                <div className="registration_block">Вход / Авторизация</div>
                <Link className="add_btn" to="/">
                    {" "}
                    Добавить объявление
                </Link>
            </div>
            <header>
                <Link to="/home" className="header_icon_link" />
                <div className="nav_links">
                    <Link to="/home" className="car_link">
                        Легковые{" "}
                    </Link>
                    <Link to="/home" className="car_link">
                        Грузовые{" "}
                    </Link>
                    <input
                        placeholder="...пример: honda accord"
                        className="search_input"
                        type="text"
                    ></input>
                    <button className="search_btn">Поиск</button>
                </div>
            </header>
            <div className="under_header">
                <div className="under_links">
                    <Link to="/">Главная </Link> &#8594;
                    <Link to="/"> Поиск Легковых авто</Link> &#8594;
                    <Link to="/"> Page</Link>
                </div>
                <div className="reklama">Рекламодателям</div>
            </div>
        </>
    );
};

export default Header;

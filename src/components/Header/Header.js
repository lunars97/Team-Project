import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';



const Header = () => {



    return (
        <>
        <div className="main_top_reklam"></div>
        <div className="top_header">
            <div className="registration_block">
                Вход / Авторизация
            </div>
            <Link className="add_btn" to="/add"> Добавить объявление</Link>
        </div>
        <header>
<<<<<<< HEAD
           <Link to="/home" className="header_icon_link"/>
            <div className="nav_links">
           <Link to="/home" className="car_link">Легковые </Link>
           <Link to="/home" className="car_link">Грузовые </Link>
=======
           <Link to="/" className="header_icon_link"/>
            <div class="nav_links">
           <Link to="/" className="car_link">Легковые </Link>
           <Link to="/" className="car_link">Грузовые </Link>
>>>>>>> b8eb4d8002d77bc3b55e480fbf998b44050fecfe
           <input placeholder="...пример: honda accord" className="search_input" type="text"></input>
            <button className="search_btn">Поиск</button>
           </div>
           
        </header>
        <div className="under_header">
            <div className="under_links">
                <Link>Главная </Link>  &#8594; 
                <Link> Поиск Легковых авто</Link>  &#8594;
                <Link> Page</Link>
            </div>
            <div className="reklama">
               Рекламодателям
            </div>
            
        </div>
        <div className="reklam_block">
            <div className="advertising"></div>
        </div>
        </>
    );
};

export default Header;
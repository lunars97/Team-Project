import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';



const Header = () => {



    return (
        <>
        <header>
           <Link to="/home" className="header_icon_link"/>
            <div class="nav_links">
           <Link to="/home" className="car_link">Легковые </Link>
           <Link to="/home" className="car_link">Грузовые </Link>
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
               Рекламадателям
            </div>
        </div>
        </>
    );
};

export default Header;
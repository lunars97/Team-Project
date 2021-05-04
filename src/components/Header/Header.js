import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import { productContext } from "../../contexts/ProductContext/ProductContext";


const Header = () => {
    const {cartLength} = useContext(productContext)
    return (
        <>
            <div className="main_top_reklam"></div>
            <div className="top_header">
                <div className="registration_block">
                    <Link to="/login">Вход </Link>/
                    <Link to="signup">Авторизация</Link>
                    
                </div>
                <Link className="add_btn" to="/add">
                    {" "}
                    Добавить объявление
                </Link>
            </div>
            <header>
                <Link to="/" className="header_icon_link" />
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
                    <Link to="/basket" style={{color: 'inherit'}}>
                        <IconButton aria-label="show 17 new notifications" color="inherit">
                            <Badge badgeContent={cartLength} color="secondary">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                        </Link>
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

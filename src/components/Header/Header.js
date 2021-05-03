import React, { useContext, useState } from "react";
import "./Header.css";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { productContext } from "../../contexts/ProductContext/ProductContext";

const Header = () => {
    const history = useHistory();
    const { getCards } = useContext(productContext);
    const [searchValue, setSearchValue] = useState(getSearchValue());
    const handleValue = (e) => {
        const search = new URLSearchParams(history.location.search);
        search.set("q", e.target.value);
        history.push(`${history.location.pathname}?${search.toString()}`);
        // console.log(history);
        setSearchValue(e.target.value);
        getCards(history);
    };
    // console.log(history);
    function getSearchValue() {
        const search = new URLSearchParams(history.location.search);
        return search.get("q");
    }
    return (
        <>
            <div className="main_top_reklam"></div>
            <div className="top_header">
                <div className="registration_block">
                    <Link to="/login">Вход</Link>/
                    <Link to="signup"> Авторизация</Link>
                </div>
                <Link className="add_btn" to="/add">
                    {" "}
                    Добавить объявление
                </Link>
            </div>
            <header>
                <Link to="/" className="header_icon_link" />
                <div className="nav_links">
                    <Link to="/" className="car_link">
                        Легковые{" "}
                    </Link>
                    <Link to="/" className="car_link">
                        Грузовые{" "}
                    </Link>
                    <input
                        placeholder="...пример: honda accord"
                        className="search_input"
                        type="text"
                        onChange={handleValue}
                        value={searchValue}
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

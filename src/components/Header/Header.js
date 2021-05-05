import React, { useContext, useState } from "react";
import "./Header.css";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import { productContext } from "../../contexts/ProductContext/ProductContext";

const Header = () => {
    const history = useHistory();
    const { getCards, cartLength } = useContext(productContext);
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
    return(
        <>
        <div className="main_top_reklam"></div>
        <div className="top_header">
            <div className="registration_block">
                Вход / Авторизация
            </div>
            <Link className="add_btn" to="/add"> Добавить объявление</Link>
        </div>
        <header>
           <a href="/" className="header_icon_link"/>
            <div class="nav_links">
           <Link to="/" className="car_link">Легковые </Link>
           <Link to="/" className="car_link">Грузовые </Link>
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
            </div>
        </>
    )

};
export default Header;

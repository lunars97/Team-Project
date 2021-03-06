import React, { useContext, useState } from "react";
import "./Header.css";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import CompareArrowsOutlinedIcon from "@material-ui/icons/CompareArrowsOutlined";
import IconButton from "@material-ui/core/IconButton";
import { productContext } from "../../contexts/ProductContext/ProductContext";
import { createBrowserHistory } from "history";

const Header = () => {
    let history = useHistory();
    const { getCards, basketLength } = useContext(productContext);
    const [searchValue, setSearchValue] = useState(getSearchValue());
    // const [value, setValue] = React.useState([1000, 100000]);
    const [priceValue, setPriceValue] = useState(getSlider());

    function getSlider() {
        const search = new URLSearchParams(history.location.search);
        return search.get("price_lte");
    }
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
    // const handleChangePrice = (e, newValue) => {
    //     setValue(newValue);
    //     const search = new URLSearchParams(history.location.search);
    //     search.set("price", e.target.value); // set method has two parameters (first is q and second is its value)
    //     history.push(
    //         `${history.location.pathname}?price_gte=${value[0]}&price_lte=${value[1]}`
    //     );
    //     getCards(history);
    //     search.toString();
    // };
    function handleChangePrice(e, value) {
        const search = new URLSearchParams(history.location.search);
        search.set("price_lte", value); // set method has two parameters (first is q and second is its value)
        history.push(`${history.location.pathname}?${search.toString()}`);
        getCards(history);
        setPriceValue(value);
    }

    return (
        <>
            <div className="main_top_reklam"></div>
            <div className="top_header">
                <div className="registration_block">
                    <Link to="/login">????????</Link>/
                    <Link to="signup"> ??????????????????????</Link>
                </div>
                <Link className="add_btn" to="/add">
                    {" "}
                    ???????????????? ????????????????????
                </Link>
            </div>
            <header>
                <Link to="/" className="header_icon_link" />
                <div className="nav_links">
                    <Link to="/" className="car_link">
                        ????????????????{" "}
                    </Link>
                    <Link to="/" className="car_link">
                        ????????????????{" "}
                    </Link>
                    <input
                        placeholder="...????????????: honda accord"
                        className="search_input"
                        type="text"
                        onChange={handleValue}
                        value={searchValue}
                    ></input>
                    <button className="search_btn">??????????</button>
                    <Link to="/basket" style={{ color: "inherit" }}>
                        <IconButton
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge
                                badgeContent={basketLength}
                                color="secondary"
                            >
                                <CompareArrowsOutlinedIcon />
                            </Badge>
                        </IconButton>
                    </Link>
                </div>
            </header>
            <div className="under_header">
                <div className="under_links">
                    <Link to="/">?????????????? </Link> &#8594;
                    <Link to="/"> ?????????? ???????????????? ????????</Link> &#8594;
                    <Link to="/"> Page</Link>
                </div>
                <div className="reklama">????????????????????????????</div>
            </div>
            <div className="typography">
                <div>
                    <Typography
                        id="range-slider"
                        gutterTop
                        style={{
                            color: "#000",
                            textAlign: "center",
                            fontSize: "14px",
                        }}
                    >
                        ???????????????????? ???? ????????
                    </Typography>
                    <Slider
                        min={1000}
                        max={100000}
                        style={{
                            width: "300px",
                            marginBottom: "10px",
                            color: "#000",
                        }}
                        value={priceValue}
                        onChange={handleChangePrice}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                        valueLabelDisplay="auto"
                    />
                </div>
            </div>
        </>
    );
};
export default Header;

import React from "react";
import { Link } from "react-router-dom";
import "./../ProductCard/ProductCard.css";

const ProductCard = (props) => {
    return (
        <Link to={`/details/${props.id}`}>
            <div className="car_card">
                <img className="card_image" src={props.item.img} />
                <div className="car_name">{props.item.brand}</div>
                <p className="price">
                    <div className="views_icon">
                        <div className="coll">115</div>
                    </div>
                    <div className="money1 money">{props.item.price}</div>
                    <div className="money2 money">411 280 сом </div>
                </p>
                <div className="info_wrapper">
                    <div className="year_miles">
                        <span>{props.item.dateOfRelease}</span>
                        <span>, 2.0л </span>
                        <span>{props.item.gearBox}</span>
                        <i className="color-icon" title="черный"></i>
                    </div>
                    <div className="body_type">
                        <span>универсал </span>
                        <span>, бензин </span>
                    </div>
                    <div className="volume">
                        <span>руль справа </span>
                        <span>{props.item.engine}</span>
                    </div>

                    <div className="card_icons">
                        <img src="https://www.mashina.kg/bundles/client/default/img/product-vip-listing.svg" />
                    </div>
                    <div className="city_name">
                        Бишкек
                        <span className="inner-time">11 мин</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};
export default ProductCard;

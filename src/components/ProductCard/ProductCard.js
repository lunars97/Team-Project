import React from "react";
import { Link } from "react-router-dom";
import "./../ProductCard/ProductCard.css";

const ProductCard = (props) => {
    return (
        <Link to={`/details/${props.id}`}>
            <div Name="car_card">
                <img Name="card_image" src={props.item.img} alt="auto-img" />
                <div Name="car_name">{props.item.brand}</div>
                <p Name="price">
                    <div Name="views_icon">
                        <div Name="coll">115</div>
                    </div>
                    <div Name="money1 money">{props.item.price} &#36;</div>
                    <div Name="money2 money">411 280 сом </div>
                </p>
                <div Name="info_wrapper">
                    <div Name="year_miles">
                        <span>{props.item.dateOfRelease}</span>
                        <span>{props.item.engine}</span>
                        <span>{props.item.gearBox}</span>
                        <span
                            style={{ backgroundColor: props.item.color }}
                            title="черный"
                        ></span>
                    </div>
                    <div Name="body_type">
                        <span>{props.item.bodyWork}</span>
                        <span>{props.item.fuel}</span>
                    </div>
                    <div Name="volume">
                        <span>{props.item.fuel}</span>
                        <span>{props.item.engine}</span>
                    </div>

                    <div Name="card_icons">
                        <img
                            src="https://www.mashina.kg/bundles/client/default/img/product-vip-listing.svg"
                            alt="car-add"
                        />
                    </div>
                    <div Name="city_name">
                        Бишкек
                        <span Name="inner-time">11 мин</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};
export default ProductCard;

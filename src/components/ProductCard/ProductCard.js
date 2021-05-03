import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = (props) => {
    function checktime() {
        let timeNow = (Date.now() - props.item.date) / 1000 / 60;
        console.log(timeNow);
        timeNow = Math.ceil(timeNow);
        if (timeNow >= 59) {
            timeNow = timeNow / 60;
            timeNow = Math.ceil(timeNow);
            return timeNow + " час.назад";
        } else {
            return timeNow + " мин.назад";
        }
    }

    return (
        <Link to={`/details/${props.id}`}>
            <div className="car_card">
                <img
                    className="card_image"
                    src={props.item.img}
                    alt="auto-img"
                />
                <div className="car_name">{props.item.brand}</div>
                <p className="price">
                    <div className="views_icon">
                        <div className="coll">115</div>
                    </div>
                    <div className="money1 money">{props.item.price} &#36;</div>
                    <div className="money2 money">
                        {props.item.priceSom} сом
                    </div>
                </p>
                <div className="info_wrapper">
                    <div className="year_miles">
                        <span>{props.item.dateOfRelease}</span>
                        <span>{props.item.engine}</span>
                        <span>{props.item.gearBox}</span>
                        <span
                            className="color-icon"
                            style={{ backgroundColor: props.item.color }}
                            title="черный"
                        ></span>
                    </div>
                    <div className="body_type">
                        <span>{props.item.bodyWork}</span>
                        <span>{props.item.fuel}</span>
                    </div>
                    <div className="volume">
                        <span>{props.item.fuel}</span>
                        <span>{props.item.engine}</span>
                    </div>

                    <div className="card_icons">
                        <img
                            src="https://www.mashina.kg/bundles/client/default/img/product-vip-listing.svg"
                            alt="car-add"
                        />
                    </div>
                    <div className="city_name">
                        Бишкек
                        <span className="inner-time">{checktime()}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};
export default ProductCard;

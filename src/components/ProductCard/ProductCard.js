import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";
import axios from "axios";

const ProductCard = (props) => {
    console.log(props.item);

    let carId = props.item.id;

    const Views = async () => {
        let { data } = await axios(`http://localhost:8000/cars/${carId}`);

        let plusVue = data.views + 1;
        console.log(plusVue);

        let newObj = {
            bodyWork: data.bodyWork,
            brand: data.brand,
            color: data.color,
            condition: data.condition,
            date: data.date,
            dateOfRelease: data.dateOfRelease,
            description: data.description,
            drive: data.drive,
            engine: data.engine,
            exchange: data.exchange,
            fuel: data.fuel,
            gearBox: data.gearBox,
            id: data.id,
            img: data.img,
            isAvailable: data.isAvailable,
            km: data.km,
            model: data.model,
            price: data.price,
            priceSom: data.priceSom,
            views: plusVue,
            wheel: data.wheel,
        };
        console.log(newObj);
        await axios.patch(
            `http://localhost:8000/cars/${props.item.id}`,
            newObj
        );
    };

    function checktime() {
        let timeNow = (Date.now() - props.item.date) / 1000 / 60;
        timeNow = Math.ceil(timeNow);

        if (timeNow >= 59 && timeNow <= 1380) {
            timeNow = timeNow / 60;
            timeNow = Math.ceil(timeNow);
            return timeNow + " час назад";
        } else if (timeNow >= 240) {
            timeNow = timeNow / 60 / 24;
            timeNow = Math.round(timeNow);
            return timeNow + " д. назад";
        } else {
            return timeNow + " мин назад";
        }
    }

    return (
        <Link onClick={() => Views()} to={`/details/${props.id}`}>
            <div className="car_card">
                <img
                    className="card_image"
                    src={props.item.img}
                    alt="auto-img"
                />
                <div className="car_name">{props.item.brand}</div>
                <p className="price">
                    <div className="views_icon">
                        <div className="coll">{props.item.views}</div>
                    </div>
                    <div className="money1 money">{props.item.price} &#36;</div>
                    <div className="money2 money">
                        {props.item.priceSom} сом
                    </div>
                </p>
                <div className="info_wrapper">
                    <div className="year_miles">
                        <span>{props.item.dateOfRelease} </span>
                        <span>{props.item.engine} </span>
                        <span>{props.item.gearBox} </span>
                        <span
                            className="color-icon"
                            style={{ backgroundColor: props.item.color }}
                            title="черный"
                        ></span>
                    </div>
                    <div className="body_type">
                        <span>{props.item.bodyWork}, </span>
                        <span>{props.item.fuel} </span>
                    </div>
                    <div className="volume">
                        <span>{props.item.wheel}, </span>
                        <span>{props.item.km} км </span>
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

import React from "react";
import { Link } from "react-router-dom";
import "../PaymentCard/PaymentCard.css";

const PaymentCard = () => {
    return (
        <>
            <div className="payment-wrapper">
                <span className="payment">
                    Перед публикацией вашего объявления, Вам необходимо
                    произвести оплату в размере 1&#36;
                </span>
            </div>
            <form className="main-form">
                <div className="form-container">
                    <div className="personal-information">
                        <h1>Оплата за объявление</h1>
                    </div>
                    <input
                        id="column-left"
                        type="text"
                        className="name-card"
                        name="first-name"
                        placeholder="Имя"
                    />
                    <input
                        id="column-right"
                        type="text"
                        className="name-card"
                        name="last-name"
                        placeholder="Фамилия"
                    />
                    <input
                        id="input-field"
                        type="text"
                        name="number"
                        className="name-card"
                        placeholder="Номер карты"
                    />
                    <input
                        id="column-left"
                        type="text"
                        name="expiry"
                        className="name-card"
                        placeholder="MM / YY"
                    />
                    <input
                        id="column-right"
                        type="text"
                        name="cvc"
                        className="name-card"
                        placeholder="CCV"
                    />

                    <div className="card-wrapper"></div>

                    <input
                        id="column-left"
                        type="text"
                        className="name-card"
                        name="city"
                        required="required"
                        autoComplete="on"
                        maxLength="20"
                        placeholder="Город"
                    />
                    <input
                        id="column-right"
                        type="text"
                        className="name-card"
                        name="zipcode"
                        required="required"
                        autoComplete="on"
                        pattern="[0-9]*"
                        maxLength="5"
                        placeholder="ZIP код"
                    />
                    <input
                        id="input-field"
                        type="email"
                        name="email"
                        required="required"
                        autoComplete="on"
                        maxLength="40"
                        placeholder="Email"
                    />
                    <Link to="/">
                        <input id="input-button" type="submit" value="Submit" />
                    </Link>
                </div>
            </form>
        </>
    );
};

export default PaymentCard;

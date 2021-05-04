import React from "react";
import { Link, useHistory } from "react-router-dom";
import "../PaymentCard/PaymentCard.css";

const PaymentCard = () => {
    const history = useHistory();
    const clickSubmit = (e) => {
        history.push("/");
        // [e.value.name] = e.target.value;
        // const inpName = e.target.value;
        // if (inpName("")) {
        //     alert("Заполните все поля!");
        // } else {
        //     alert("Спасибо за оплату!");
        // }
    };

    return (
        <>
            <div className="payment-wrapper">
                <span className="payment">
                    Перед публикацией вашего объявления, Вам необходимо
                    произвести оплату в размере 1&#36;
                </span>
            </div>
            <form className="main-formed">
                <div className="form-containers">
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
                        maxLength="16"
                        placeholder="Номер карты"
                        pattern="[0-9]*"
                    />
                    <input
                        id="column-left"
                        type="text"
                        name="expiry"
                        className="name-card"
                        placeholder="MM / YY"
                        maxLength="4"
                        pattern="[0-9]*"
                    />
                    <input
                        id="column-right"
                        type="text"
                        name="cvc"
                        className="name-card"
                        placeholder="CCV"
                        maxLength="3"
                        pattern="[0-9]*"
                    />

                    <input
                        id="column-left"
                        type="text"
                        name="city"
                        required="required"
                        autoComplete="on"
                        maxLength="20"
                        placeholder="Город"
                    />
                    <input
                        id="column-right"
                        type="text"
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
                    {/* <Link to="/"> */}
                    <button onClick={clickSubmit} id="input-button">
                        Оплатить
                    </button>
                    {/* </Link> */}
                </div>
            </form>
        </>
    );
};

export default PaymentCard;

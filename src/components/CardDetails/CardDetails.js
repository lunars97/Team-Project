import React, { useContext, useEffect } from "react";
import { productContext } from "../../contexts/ProductContext/ProductContext";
import "./../CardDetails/CardDetails.css";
import { Link } from "react-router-dom";

const CardDetails = (props) => {
    const { getCardDetails, cardDetails, deleteCar, addComment } = useContext(
        productContext
    );

    useEffect(() => {
        getCardDetails(props.match.params.id);
    }, [props.match.params.id]);

    console.log(props);
    return (
        <div>
            {cardDetails ? (
                <>
                    <div className="main_container_car">
                        <div className="carinfo-container">
                            <div className="sell_name">
                                <div className="sell_name_left">
                                    В продаже: {cardDetails.brand}{" "}
                                    {cardDetails.model} {cardDetails.engine}{" "}
                                    {cardDetails.dateOfRelease} год
                                </div>
                                <div className="sell_som_dollar_block">
                                    <div className="sell_dollar">
                                        $ {cardDetails.price}
                                    </div>
                                    <div className="sell_som">
                                        {cardDetails.priceSom} сом
                                    </div>
                                </div>
                            </div>

                            <div className="carinfo_left">
                                <div>Характеристики</div>

                                <div className="field-row">
                                    <div className="left-item item">
                                        Год выпуска
                                    </div>{" "}
                                    <div className="right-item item">
                                        {cardDetails.dateOfRelease}
                                    </div>
                                </div>

                                <div className="field-row">
                                    <div className="left-item item">Пробег</div>{" "}
                                    <div className="right-item item">
                                        {cardDetails.km} км
                                    </div>
                                </div>

                                <div className="field-row">
                                    <div className="left-item item">Кузов</div>{" "}
                                    <div className="right-item item">
                                        {cardDetails.bodyWork}
                                    </div>
                                </div>

                                <div className="field-row">
                                    <div className="left-item item">Цвет</div>{" "}
                                    <div className="right-item item">
                                        <span
                                            id="info-color"
                                            className="color-icon"
                                            style={{
                                                backgroundColor:
                                                    cardDetails.color,
                                            }}
                                            title="черный"
                                        ></span>
                                    </div>
                                </div>

                                <div className="field-row">
                                    <div className="left-item item">
                                        Двигатель
                                    </div>{" "}
                                    <div className="right-item item">
                                        {cardDetails.engine}
                                    </div>
                                </div>

                                <div className="field-row">
                                    <div className="left-item item">
                                        Коробка
                                    </div>{" "}
                                    <div className="right-item item">
                                        {cardDetails.gearBox}
                                    </div>
                                </div>

                                <div className="field-row">
                                    <div className="left-item item">Привод</div>{" "}
                                    <div className="right-item item">
                                        {cardDetails.drive}
                                    </div>
                                </div>

                                <div className="field-row">
                                    <div className="left-item item">Руль</div>{" "}
                                    <div className="right-item item">
                                        {cardDetails.wheel}
                                    </div>
                                </div>

                                <div className="field-row">
                                    <div className="left-item item">
                                        Состояние
                                    </div>{" "}
                                    <div className="right-item item">
                                        {cardDetails.condition}
                                    </div>
                                </div>

                                <div className="field-row">
                                    <div className="left-item item">
                                        Наличие
                                    </div>{" "}
                                    <div className="right-item item">
                                        {cardDetails.isAvailable}
                                    </div>
                                </div>
                                <br />
                                <Link to="/">
                                    {" "}
                                    <button
                                        onClick={() =>
                                            deleteCar(cardDetails.id)
                                        }
                                    >
                                        Delete
                                    </button>
                                </Link>
                            </div>
                            <div className="car_image_block">
                                <div className="car_image_card">
                                    {" "}
                                    <img src={cardDetails.img} />
                                </div>
                                <div className="car_description">
                                    <h3>Описание:</h3>
                                    <br />
                                    <div>{cardDetails.description}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <p>Добавить комментарий</p>
                    <ul>
                        {addComment.map((item) => {
                            <li
                                key={item.comment}
                                comment={item.comment}
                                id={item.comment.id}
                            ></li>;
                        })}
                    </ul> */}
                </>
            ) : (
                "Details"
            )}
        </div>
    );
};

export default CardDetails;

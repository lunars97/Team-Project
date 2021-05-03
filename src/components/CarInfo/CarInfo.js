import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../../contexts/ProductContext/ProductContext";
import "./CarInfo.css";

const CarInfo = (props) => {
    const { getCardDetails, cardDetails } = useContext(productContext);

    useEffect(() => {
        getCardDetails(props.match.params.id);
    }, [props.match.params.id]);
    console.log(props);
    return (
        <>
            {cardDetails ? (
                <div className="main_container_car">
                    <div className="carinfo-container">
                        <div className="sell_name">
                            <div className="sell_name_left">
                                {cardDetails.brand}
                            </div>
                            <div className="sell_som_dollar_block">
                                <div className="sell_dollar">
                                    {cardDetails.price}
                                </div>
                                <div className="sell_som">
                                    {cardDetails.priceSom}
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
                                <div className="right-item item">130 000</div>
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
                                        style={{
                                            backgroundColor: cardDetails.color,
                                        }}
                                    />
                                    {cardDetails.color}
                                </div>
                            </div>

                            <div className="field-row">
                                <div className="left-item item">Двигатель</div>{" "}
                                <div className="right-item item">
                                    {cardDetails.engine}
                                </div>
                            </div>

                            <div className="field-row">
                                <div className="left-item item">Коробка</div>{" "}
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
                                <div className="left-item item">Состояние</div>{" "}
                                <div className="right-item item">
                                    {cardDetails.condition}
                                </div>
                            </div>

                            <div className="field-row">
                                <div className="left-item item">Наличие</div>{" "}
                                <div className="right-item item">
                                    {cardDetails.isAvailable}
                                </div>
                            </div>
                        </div>
                        <div className="car_image_block">
                            <div className="car_image_card">
                                <img
                                    className="details-img"
                                    src={cardDetails.img}
                                    alt="car"
                                />
                            </div>
                            <div className="car_description">
                                <h3>Описание:</h3>
                                <br />
                                <div>{cardDetails.description}</div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                "Details"
            )}
        </>
    );
};

export default CarInfo;

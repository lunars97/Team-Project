import { productContext } from "../../contexts/ProductContext/ProductContext";
import React, { useContext, useEffect, useRef, useState } from "react";
import Header from "../Header/Header";
import { CodeSharp } from "@material-ui/icons";
import { useHistory } from "react-router";

const CarEdit = (props) => {
    const { getCardEdit, cardEdit, saveCard } = useContext(productContext);
    const history = useHistory();

    useEffect(() => {
        getCardEdit(props.match.params.id);
        console.log(cardEdit);
    }, []);
    const [EditedCar, setEditedCar] = useState();

    function handleEdit(e) {
        let newObj = {
            ...cardEdit,
            ...EditedCar,
            [e.target.name]: e.target.value,
        };
        setEditedCar(newObj);
    }
    function handleEditSave() {
        console.log(cardEdit.id);
        saveCard(cardEdit.id, EditedCar);
        // console.log(EditedCar, 'this')
        // window.location.reload();
        history.push("/");
    }

    // useEffect (() => {
    //     getCardEdit(props.match.params.id)
    // }, [props.match.params.id])

    return (
        <div>
            {cardEdit ? (
                <>
                    <div className="main_container_car">
                        <div className="carinfo-container">
                            <div className="sell_name">
                                <div className="sell_name_left">
                                    В продаже:{" "}
                                    <input
                                        name="brand"
                                        onChange={(e) => handleEdit(e)}
                                        className="edit-inps top-inps"
                                        placeholder={cardEdit.brand}
                                    />
                                    <input
                                        name="model"
                                        onChange={(e) => handleEdit(e)}
                                        className="edit-inps top-inps"
                                        placeholder={cardEdit.model}
                                    />
                                    <input
                                        name="engine"
                                        onChange={(e) => handleEdit(e)}
                                        className="edit-inps top-inps"
                                        placeholder={cardEdit.engine}
                                    />
                                    <input
                                        name="dateOfRelease"
                                        onChange={(e) => handleEdit(e)}
                                        className="edit-inps top-inps"
                                        placeholder={cardEdit.dateOfRelease}
                                    />{" "}
                                    год
                                </div>

                                <div className="sell_som_dollar_block">
                                    <div className="sell_dollar">
                                        ${" "}
                                        <input
                                            name="price"
                                            onChange={(e) => handleEdit(e)}
                                            className="edit-inps"
                                            placeholder={cardEdit.price}
                                        />
                                    </div>
                                    <div className="sell_som">
                                        Сом
                                        <input
                                            name="priceSom"
                                            onChange={(e) => handleEdit(e)}
                                            className="edit-inps"
                                            placeholder={cardEdit.priceSom}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="carinfo_left">
                                <div>Характеристики</div>

                                <div className="field-row">
                                    <div className="left-item item">
                                        Год выпуска
                                    </div>
                                    <div className="right-item item">
                                        <input
                                            name="dateOfRelease"
                                            onChange={(e) => handleEdit(e)}
                                            className="edit-inps"
                                            placeholder={cardEdit.dateOfRelease}
                                        />
                                    </div>
                                </div>

                                <div className="field-row">
                                    <div className="left-item item">Пробег</div>
                                    <div className="right-item item">
                                        <input
                                            name="km"
                                            onChange={(e) => handleEdit(e)}
                                            className="edit-inps"
                                            placeholder={cardEdit.km}
                                        />
                                    </div>
                                </div>

                                <div className="field-row">
                                    <div className="left-item item">Кузов</div>
                                    <div className="right-item item">
                                        <input
                                            name="bodyWork"
                                            onChange={(e) => handleEdit(e)}
                                            className="edit-inps"
                                            placeholder={cardEdit.bodyWork}
                                        />
                                    </div>
                                </div>

                                <div className="field-row">
                                    <div className="left-item item">Цвет</div>
                                    <div className="right-item item">
                                        <select
                                            name="color"
                                            className="edit-inps"
                                            style={{
                                                backgroundColor: cardEdit.color,
                                            }}
                                            id="cars"
                                            onChange={(e) => handleEdit(e)}
                                        >
                                            <option
                                                value={cardEdit.color}
                                                selected
                                            ></option>
                                            <option value="#FFFFFF">
                                                белый
                                            </option>
                                            <option value="#AF2B1E">
                                                красный
                                            </option>
                                            <option value="#386646">
                                                зеленый
                                            </option>
                                            <option value="#00BFFF">
                                                голубой
                                            </option>
                                            <option value="#1A4780">
                                                синий
                                            </option>
                                            <option value="#FFBA00">
                                                жёлтый
                                            </option>

                                            <option value="#C0C0C0">
                                                серебристый
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <div className="field-row">
                                    <div className="left-item item">
                                        Двигатель
                                    </div>
                                    <div className="right-item item">
                                        <input
                                            name="engine"
                                            onChange={(e) => handleEdit(e)}
                                            className="edit-inps"
                                            placeholder={cardEdit.engine}
                                        />
                                    </div>
                                </div>

                                <div className="field-row">
                                    <div className="left-item item">
                                        Коробка
                                    </div>
                                    <div className="right-item item">
                                        <input
                                            name="gearBox"
                                            onChange={(e) => handleEdit(e)}
                                            className="edit-inps"
                                            placeholder={cardEdit.gearBox}
                                        />
                                    </div>
                                </div>

                                <div className="field-row">
                                    <div className="left-item item">Привод</div>
                                    <div className="right-item item">
                                        <input
                                            name="drive"
                                            onChange={(e) => handleEdit(e)}
                                            className="edit-inps"
                                            placeholder={cardEdit.drive}
                                        />
                                    </div>
                                </div>

                                <div className="field-row">
                                    <div className="left-item item">Руль</div>
                                    <div className="right-item item">
                                        <input
                                            name="wheel"
                                            onChange={(e) => handleEdit(e)}
                                            className="edit-inps"
                                            placeholder={cardEdit.wheel}
                                        />
                                    </div>
                                </div>

                                <div className="field-row">
                                    <div className="left-item item">
                                        Состояние
                                    </div>
                                    <div className="right-item item">
                                        <input
                                            name="condition"
                                            onChange={(e) => handleEdit(e)}
                                            className="edit-inps"
                                            placeholder={cardEdit.condition}
                                        />
                                    </div>
                                </div>

                                <div className="field-row">
                                    <div className="left-item item">
                                        Наличие
                                    </div>
                                    <div className="right-item item">
                                        <input
                                            name="isAvailable"
                                            onChange={(e) => handleEdit(e)}
                                            className="edit-inps"
                                            placeholder={cardEdit.isAvailable}
                                        />
                                    </div>
                                </div>
                                <button
                                    className="carDetail-btn"
                                    onClick={() => window.history.back()}
                                >
                                    Назад
                                </button>
                                <button
                                    className="carDetail-btn"
                                    onClick={() => handleEditSave()}
                                >
                                    {" "}
                                    save
                                </button>
                            </div>
                            <div className="car_image_block">
                                <div className="car_image_card">
                                    <img src={cardEdit.img} />
                                    <input
                                        name="img"
                                        onChange={(e) => handleEdit(e)}
                                        className="edit-inps"
                                        placeholder={cardEdit.img}
                                    />{" "}
                                    ссылка к картинке
                                </div>

                                <div className="edit_carDescription">
                                    <h3>Описание:</h3>
                                    <br />
                                    <div>
                                        <input
                                            name="description"
                                            onChange={(e) => handleEdit(e)}
                                            className="edit-inps edit-description"
                                            placeholder={cardEdit.description}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cont_reklam_block">
                            <div className="advertising_container"></div>
                            <div className="advertising_second"></div>
                        </div>
                    </div>
                </>
            ) : (
                "Car Edit"
            )}
        </div>
    );
};

export default CarEdit;

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { productContext } from "../../contexts/ProductContext/ProductContext";
import "../AddCard/AddCard.css";
const AddCard = () => {
    const [img, setImg] = useState("");
    const [brand, setBrand] = useState("");
    const [dateOfRelease, setDateOfRelease] = useState("");
    const [engine, setEngine] = useState("");
    const [gearBox, setGearBox] = useState("");
    const [condition, setCondition] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const { postNewCard } = useContext(productContext);

    function handleClick(e) {
        e.preventDefault();
        let newObj = {
            img: img,
            brand: brand,
            dateOfRelease: dateOfRelease,
            engine: engine,
            gearBox: gearBox,
            condition: condition,
            price: price,
            description: description,
        };
        console.table(newObj);
        postNewCard(newObj);
        setImg("");
        setBrand("");
        setDateOfRelease("");
        setEngine("");
        setGearBox("");
        setCondition("");
        setDescription("");
        setPrice("");
    }
    return (
        <>
            <div className="main_inp-container">
                <div className="inp-container">
                    <form className="form-container" onSubmit={handleClick}>
                        {/* <h2 style={{ color: item.carColor }}> */}
                        <h2 className="form-container">Добавить объявление</h2>
                        <p>
                            <input
                                className="inp-add"
                                name="img"
                                value={img}
                                type="text"
                                placeholder="Изображение"
                                onChange={(e) => setImg(e.target.value)}
                            />
                        </p>
                        <p>
                            <input
                                className="inp-add"
                                name="brand"
                                value={brand}
                                type="text"
                                placeholder="Марка"
                                // onChange={handleValues}
                                onChange={(e) => setBrand(e.target.value)}
                            />
                        </p>
                        <p>
                            <input
                                className="inp-add"
                                name="dateOfRelease"
                                value={dateOfRelease}
                                type="text"
                                placeholder="Год выпуска"
                                // onChange={handleValues}
                                onChange={(e) =>
                                    setDateOfRelease(e.target.value)
                                }
                            />
                        </p>
                        <p>
                            <input
                                className="inp-add"
                                name="engine"
                                value={engine}
                                type="text"
                                placeholder="Двигатель"
                                // onChange={handleValues}
                                onChange={(e) => setEngine(e.target.value)}
                            />
                        </p>
                        <p>
                            <input
                                className="inp-add"
                                name="gearBox"
                                value={gearBox}
                                type="text"
                                placeholder="Коробка"
                                // onChange={handleValues}
                                onChange={(e) => setGearBox(e.target.value)}
                            />
                        </p>
                        <p>
                            <input
                                className="inp-add"
                                name="condition"
                                value={condition}
                                type="text"
                                placeholder="Состояние"
                                // onChange={handleValues}
                                onChange={(e) => setCondition(e.target.value)}
                            />
                        </p>
                        <p>
                            <input
                                className="inp-add"
                                name="telephone"
                                value={price}
                                type="number"
                                placeholder="Цена"
                                // onChange={handleValues}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </p>
                        <p>
                            <textarea
                                className="inp-add"
                                name="description"
                                value={description}
                                type="text"
                                placeholder="Описание"
                                // onChange={handleValues}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </p>
                        <button className="inpBtn">Добавить</button>
                    </form>
                    <Link to="/">
                        <button className="main-btn">На главную</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default AddCard;

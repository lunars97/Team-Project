import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { productContext } from "../../contexts/ProductContext/ProductContext";
import "../AddCard/AddCard.css";

const AddCard = () => {
    const history = useHistory();
    const [img, setImg] = useState("");
    const [brand, setBrand] = useState("");
    const [dateOfRelease, setDateOfRelease] = useState("");
    const [engine, setEngine] = useState("");
    const [wheel, setWheel] = useState("");
    const [gearBox, setGearBox] = useState("");
    const [drive, setDrive] = useState("");
    const [carColor, setCarColor] = useState("");
    const [exchange, setExchange] = useState("");
    const [isAvailable, setIsAvailable] = useState("");
    const [bodyWork, setBodyWork] = useState("");
    const [model, setModel] = useState("");
    const [condition, setCondition] = useState("");
    const [fuel, setFuel] = useState("");
    const [price, setPrice] = useState("");
    const [priceSom, setPriceSom] = useState("");
    const [description, setDescription] = useState("");
    const { postNewCard } = useContext(productContext);
    const [km, setKm] = useState("");

    function convert(e) {
        setPrice(e);
        let som = Math.floor(e * 84.9);
        som = som.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1 ");
        setPriceSom(som);
    }
    function dollChange() {
        let dollar = price;
        dollar = dollar.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1 ");
        setPrice(dollar);
    }

    function handleColor(e) {
        setCarColor(e);
    }

    function handleClick(e) {
        e.preventDefault();

        let newObj = {
            img: img,
            brand: brand,
            dateOfRelease: dateOfRelease,
            engine: engine,
            wheel: wheel,
            gearBox: gearBox,
            drive: drive,
            color: carColor,
            bodyWork: bodyWork,
            isAvailable: isAvailable,
            model: model,
            condition: condition,
            price: price,
            priceSom: priceSom,
            exchange: exchange,
            description: description,
            date: Date.now(),
            fuel: fuel,
            km: km,
            views: 1,
        };
        postNewCard(newObj, history);
        setImg("");
        setExchange("");
        setBrand("");
        setDateOfRelease("");
        setCarColor("");
        setModel("");
        setFuel("");
        setEngine("");
        setWheel("");
        setBodyWork("");
        setDrive("");
        setGearBox("");
        setCondition("");
        setDescription("");
        setPrice("");
        setIsAvailable("");
        setKm("");
        history.push("/payment");
    }

    return (
        <div className="main_inp-container">
            <div className="inp-container">
                <form className="form_container" onSubmit={handleClick}>
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
                            onChange={(e) => setDateOfRelease(e.target.value)}
                        />
                    </p>
                    <p>
                        <input
                            className="inp-add"
                            name="model"
                            value={model}
                            type="text"
                            placeholder="Модель"
                            // onChange={handleValues}
                            onChange={(e) => setModel(e.target.value)}
                        />
                    </p>
                    <p>
                        <input
                            className="inp-add"
                            name="fuel"
                            value={fuel}
                            type="text"
                            placeholder="Топливо"
                            // onChange={handleValues}
                            onChange={(e) => setFuel(e.target.value)}
                        />
                    </p>
                    <p>
                        <input
                            className="inp-add"
                            name="bodyWork"
                            value={bodyWork}
                            type="text"
                            placeholder="Кузов"
                            // onChange={handleValues}
                            onChange={(e) => setBodyWork(e.target.value)}
                        />
                    </p>
                    <p>
                        <input
                            className="inp-add"
                            name="drive"
                            value={drive}
                            type="text"
                            placeholder="Привод"
                            // onChange={handleValues}
                            onChange={(e) => setDrive(e.target.value)}
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
                            name="wheel"
                            value={wheel}
                            type="text"
                            placeholder="Руль"
                            // onChange={handleValues}
                            onChange={(e) => setWheel(e.target.value)}
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
                            name="km"
                            value={km}
                            type="text"
                            placeholder="Пробег"
                            onChange={(e) => setKm(e.target.value)}
                        />
                    </p>

                    <label htmlFor="cars">Цвет машины:</label>
                    <select
                        id="cars"
                        onChange={(e) => handleColor(e.target.value)}
                    >
                        <option value="white">белый</option>
                        <option value="black" defaultValue>
                            черный
                        </option>
                        <option value="#90021D">бордовый</option>
                        <option value="#510A51">темно-фиолетовый</option>
                        <option value="#011F5E">темно-синий</option>
                        <option value="#AF2B1E">красный</option>
                        <option value="#386646">зеленый</option>
                        <option value="#00BFFF">голубой</option>
                        <option value="#FFBA00">жёлтый</option>
                        <option value="silver">серебристый</option>
                    </select>
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
                            name="isAvailable"
                            value={isAvailable}
                            type="text"
                            placeholder="Наличие"
                            // onChange={handleValues}
                            onChange={(e) => setIsAvailable(e.target.value)}
                        />
                    </p>
                    <p>
                        <input
                            className="inp-add"
                            name="exchange"
                            value={exchange}
                            type="text"
                            placeholder="Обмен"
                            // onChange={handleValues}
                            onChange={(e) => setExchange(e.target.value)}
                        />
                    </p>
                    <p>
                        <input
                            className="inp-add"
                            name="telephone"
                            value={price}
                            type="number"
                            placeholder="Цена в &#36;"
                            min="1"
                            // onChange={handleValues}
                            onChange={(e) => convert(e.target.value)}
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
                    {/* <Link to="/payment"> */}
                    <button onClick={() => dollChange()} className="inpBtn">
                        Добавить
                    </button>
                    {/* </Link> */}
                </form>
                <Link to="/">
                    <button className="main-btn">На главную</button>
                </Link>
            </div>
        </div>
    );
};

export default AddCard;

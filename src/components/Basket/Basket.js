import { CircularProgress } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { productContext } from "../../contexts/ProductContext/ProductContext";
import { calcTotalPrice } from "../../Helpers/calcPrice";
import "./Basket.css";
import { Link } from "react-router-dom";
import DetailsIcon from "@material-ui/icons/Details";

const Basket = (props) => {
    const { getCart, basket, deleteFromCart } = useContext(productContext);

    useEffect(() => {
        getCart();
    }, []);
    console.log(basket);
    return (
        <div className="basket">
            {basket.cars ? (
                <div className="inner-basket">
                    <table>
                        <thead>
                            <tr>
                                <th>Изображение</th>
                                <th>Марка</th>
                                <th>Модель</th>
                                <th>Год выпуска</th>
                                <th>Cостояние</th>
                                <th>Цена</th>
                                <th>Подробнее</th>
                                <th>Убрать</th>
                            </tr>
                        </thead>
                        <tbody>
                            {basket.cars.map((elem) => (
                                <tr key={elem.item.id}>
                                    <td>
                                        <img
                                            style={{ width: "130px" }}
                                            src={elem.item.img}
                                            alt="product-img"
                                        />
                                    </td>
                                    <td>{elem.item.brand}</td>
                                    <td>{elem.item.model}</td>
                                    <td>{elem.item.dateOfRelease}</td>
                                    <td>{elem.item.condition}</td>
                                    <td>
                                        $ {elem.item.price} &{" "}
                                        {elem.item.priceSom}coм
                                    </td>
                                    <td>
                                        <Link to={`/details/${elem.item.id}`}>
                                            <div>
                                                <DetailsIcon />
                                            </div>
                                        </Link>
                                    </td>
                                    <td>
                                        <button
                                            className="remove-icon"
                                            onClick={() =>
                                                deleteFromCart(elem.item.id)
                                            }
                                        >
                                            &times;
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <CircularProgress />
            )}
        </div>
    );
};

export default Basket;

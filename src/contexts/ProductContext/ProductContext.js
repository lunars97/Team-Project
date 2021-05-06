import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import {
    calcsubPrice,
    calcTotalPrice,
    getCountProductsCart,
} from "../../Helpers/calcPrice";
import { useHistory } from "react-router";

export const productContext = React.createContext();
const INIT_STATE = {
    productsData: [],
    cardDetails: null,
    basket: {},
    basketLength: getCountProductsCart(),
    allPages: 0,
    cardEdit: null,
};

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_CARDS":
            return {
                ...state,
                productsData: action.payload.data,
                allPages: action.num,
            };
        case "GET_CARD_DETAILS":
            return {
                ...state,
                cardDetails: action.payload,
            };
        case "GET_BASKET":
            return { ...state, basket: action.payload };

        case "CHANGE_BASKET_COUNT":
            return { ...state, basketLength: action.payload };
        case "GET_CARD_EDIT":
            return { ...state, cardEdit: action.payload };
        default:
            return state;
    }
};

const ProductContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    const [page, setPage] = useState(1);
    const history = useHistory();

    useEffect(() => {
        getCards(history);
    }, [page]);

    async function getCards(history) {
        const search = new URLSearchParams(history.location.search);
        search.set("_limit", 8);
        history.push(`${history.location.pathname}?${search.toString()}`);
        let res = await axios.get(
            `http://localhost:8000/cars?_page=${page}&_limit=8&${window.location.search}`
        );
        let num = Math.ceil(res.headers["x-total-count"] / 8);

        dispatch({
            type: "GET_CARDS",
            payload: res,
            num: num,
        });
    }

    function addCarToBasket(car) {
        let basket = JSON.parse(localStorage.getItem("basket"));
        if (!basket) {
            basket = {
                cars: [],
                totalPrice: 0,
            };
        }
        let newCar = {
            item: car,
            count: 1,
            subPrice: 0,
        };

        let filteredBasket = basket.cars.filter(
            (elem) => elem.item.id === car.id
        );
        if (filteredBasket.length > 0) {
            basket.cars = basket.cars.filter((elem) => elem.item.id !== car.id);
        } else {
            basket.cars.push(newCar);
        }

        newCar.subPrice = calcsubPrice(newCar);
        basket.totalPrice = calcTotalPrice(basket.cars);
        localStorage.setItem("basket", JSON.stringify(basket));

        dispatch({
            type: "CHANGE_BASKET_COUNT",
            payload: basket.cars.length,
        });
    }

    function getCart() {
        let basket = JSON.parse(localStorage.getItem("basket"));
        if (!basket) {
            basket = {
                cars: [],
                totalPrice: 0,
            };
        }
        dispatch({
            type: "GET_BASKET",
            payload: basket,
        });
    }

    function changeProductCount(count, id) {
        let basket = JSON.parse(localStorage.getItem("basket"));
        basket.cars = basket.cars.map((elem) => {
            if (elem.item.id === id) {
                elem.count = count;
                elem.subPrice = calcsubPrice(elem);
            }
            return elem;
        });
        basket.totalPrice = calcTotalPrice(basket.cars);
        localStorage.setItem("basket", JSON.stringify(basket));
        getCart();
    }

    function checkProductInCart(id) {
        let basket = JSON.parse(localStorage.getItem("basket"));
        if (!basket) {
            basket = {
                cars: [],
                totalPrice: 0,
            };
        }
        let newBasket = basket.cars.filter((elem) => elem.item.id === id);
        return newBasket.length > 0 ? true : false;
    }

    function deleteFromCart(id) {
        let basket = JSON.parse(localStorage.getItem("basket"));
        console.log(basket);
        basket.cars = basket.cars.filter((elem) => elem.item.id != id);
        localStorage.setItem("basket", JSON.stringify(basket));
        getCart();
    }

    const postNewCard = async (card, history) => {
        await axios.post("http://localhost:8000/cars", card);
        getCards(history);
    };

    const patchNewCard = (card) => {
        console.log(card);
    };
    async function getCardDetails(id) {
        let { data } = await axios.get(`http://localhost:8000/cars/${id}`);
        dispatch({
            type: "GET_CARD_DETAILS",
            payload: data,
        });
    }

    async function getCardEdit(id) {
        let { data } = await axios.get(`http://localhost:8000/cars/${id}`);
        dispatch({
            type: "GET_CARD_EDIT",
            payload: data,
        });
    }

    async function saveCard(id, newCard) {
        await axios.patch(`http://localhost:8000/cars/${id}`, newCard);
        console.log(newCard);
        getCardDetails(id);
    }
    async function deleteCar(id) {
        axios.delete(`http://localhost:8000/cars/${id}`);
    }
    async function addComment(comment, id) {
        let {
            data: { comments },
        } = await axios(`http://localhost:8000/cars/${id}`);

        comments.push(comment);

        axios.patch(`http://localhost:8000/cars/${id}`, comments);
    }
    return (
        <productContext.Provider
            value={{
                productsData: state.productsData,
                cardDetails: state.cardDetails,
                cardEdit: state.cardEdit,
                allPages: state.allPages,
                basketLength: state.basketLength,
                basket: state.basket,
                getCards,
                getCardEdit,
                postNewCard,
                patchNewCard,
                getCardDetails,
                setPage,
                getCart,
                saveCard,
                addCarToBasket,
                changeProductCount,
                checkProductInCart,
                deleteFromCart,
                deleteCar,
                addComment,
            }}
        >
            {children}
        </productContext.Provider>
    );
};
export default ProductContextProvider;

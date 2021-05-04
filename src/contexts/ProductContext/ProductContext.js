import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";

export const productContext = React.createContext();
const INIT_STATE = {
    productsData: [],
    cardDetails: null,
    allPages: 0,
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
        default:
            return state;
    }
};
const ProductContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    const [page, setPage] = useState(1);

    useEffect(() => {
        getCards();
    }, [page]);

    async function getCards(history) {
        // const search = new URLSearchParams(history.location.search);
        // search.set("_limit", 8);
        // history.push(`${history.location.pathname}${search.toString()}`);
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

    const postNewCard = async (card) => {
        await axios.post("http://localhost:8000/cars", card);
        getCards();
    };
    async function getCardDetails(id) {
        let { data } = await axios.get(`http://localhost:8000/cars/${id}`);
        dispatch({
            type: "GET_CARD_DETAILS",
            payload: data,
        });
    }
    async function saveCard(id, newCard) {
        await axios.patch(`http://localhost:8000/cars/${id}`, newCard);
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
                allPages: state.allPages,
                getCards,
                postNewCard,
                getCardDetails,
                setPage,
                saveCard,
                deleteCar,
                addComment,
            }}
        >
            {children}
        </productContext.Provider>
    );
};
export default ProductContextProvider;

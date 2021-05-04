import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";

export const productContext = React.createContext();
const INIT_STATE = {
    productsData: [],
    cardDetails: null,
    allPages: 0,
    cardEdit: null,
};
const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_CARDS":
            return {
                ...state,
                productsData: action.payload,
                allPages: action.num,
            };
        case "GET_CARD_DETAILS":
            return {
                ...state,
                cardDetails: action.payload,
            };
        case "GET_CARD_EDIT":
            return {
                ...state,
                cardEdit: action.payload,
            };
        
            default:
            return state;
    }
};
const ProductContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    const [page, setPage] = useState(1);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        getCards();
    }, [page]);




    

    async function getCards() {
        let res = await axios.get(
            `http://localhost:8000/cars?_page=${page}&_limit=8`
        );
        let num = Math.ceil(res.headers["x-total-count"] / 8);
      
        dispatch({
            type: "GET_CARDS",
            payload: res.data,
            num: num,
        });
    }

    const postNewCard = async (card) => {
        await axios.post("http://localhost:8000/cars", card);
        getCards();
    };

    const patchNewCard =  (card) => {
     
        console.log(card)
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
        console.log(newCard)
        getCardDetails(id);
        
        
    }
    function handleCloseModal() {
        setModal(false);
    }
    return (
        <productContext.Provider
            value={{
                productsData: state.productsData,
                cardDetails: state.cardDetails,
                cardEdit: state.cardEdit,
                allPages: state.allPages,
                getCards,
                postNewCard,
                patchNewCard,
                getCardDetails,
                setPage,
                saveCard,
                handleCloseModal,
                getCardEdit,
            }}
        >
            {children}
        </productContext.Provider>
    );
};
export default ProductContextProvider;

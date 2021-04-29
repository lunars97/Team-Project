import React, { useReducer } from "react";
import axios from "axios";

export const productContext = React.createContext();
const INIT_STATE = {
    productsData: [],
};
const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_CARDS":
            return {
                ...state,
                productsData: action.payload,
            };
        default:
            return state;
    }
};
const ProductContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    async function getCards() {
        let { data } = await axios.get(`http://localhost:8000/cars`);
        console.log(data);
        dispatch({
            type: "GET_CARDS",
            payload: data,
        });
    }

    const postNewCard = async (newCard) => {
        await axios.post("http://localhost:8000/cars", newCard);
        getCards();
    };

    return (
        <productContext.Provider
            value={{
                productsData: state.productsData,
                getCards,
                postNewCard,
            }}
        >
            {children}
        </productContext.Provider>
    );
};
export default ProductContextProvider;

import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import { calcsubPrice, calcTotalPrice, getCountProductsCart } from '../../Helpers/calcPrice';

export const productContext = React.createContext();
const INIT_STATE = {
    productsData: [],
    cardDetails: null,
    basket: {},
    cartLength: getCountProductsCart(),
    allPages: 0,
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
        case "GET_CART":
                return {...state, basket: action.payload}
    
        case "CHANGE_CART_COUNT":
                return {...state, cartLength: action.payload}
        default:
            return state;
    }
};


const ProductContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    const [page, setPage] = useState(1);

    // const [modal, setModal] = useState(false);

    useEffect(() => {
        getCards();
    }, [page]);

    async function getCards() {
        let res = await axios.get(
            `http://localhost:8000/cars?_page=${page}&_limit=8`
        );
        let num = Math.ceil(res.headers["x-total-count"] / 4);
        // console.log(res.data);
        dispatch({
            type: "GET_CARDS",
            payload: res.data,
            num: num,
        });
    }


    function addProductToCard(product){
        let cart = JSON.parse(localStorage.getItem('cart'));
        if(!cart){
            cart = {
                products: [],
                totalPrice: 0
            }
        }
        let newProduct = {
            item: product,
            count: 1,
            subPrice: 0
        }
        

        let filteredCart = cart.products.filter(elem => elem.item.id === product.id)
        if(filteredCart.length >0){
            cart.products = cart.products.filter(elem => elem.item.id !== product.id)
        }else{
            cart.products.push(newProduct)
        }

        newProduct.subPrice = calcsubPrice(newProduct)
        cart.totalPrice = calcTotalPrice(cart.products)
        localStorage.setItem("cart", JSON.stringify(cart))
        
        dispatch({
            type: "CHANGE_CART_COUNT",
            payload: cart.products.length
        })
    }
  

    function getCart(){
        let cart = JSON.parse(localStorage.getItem('cart'));
        if(!cart){
            cart = {
                products: [],
                totalPrice: 0
            }
        }
        dispatch({
            type: "GET_CART",
            payload: cart
        })
    }

    function changeProductCount(count, id){
        let cart = JSON.parse(localStorage.getItem('cart'));
        cart.products = cart.products.map(elem => {
            if(elem.item.id === id){
                elem.count = count
                elem.subPrice = calcsubPrice(elem)
            }
            return elem
        })
        cart.totalPrice = calcTotalPrice(cart.products)
        localStorage.setItem("cart", JSON.stringify(cart))
        getCart()
    }

    function checkProductInCart(id){
        let cart = JSON.parse(localStorage.getItem('cart'));
        if(!cart){
            cart = {
                products: [],
                totalPrice: 0
            }
        }let newCart =cart.products.filter(elem => elem.item.id ===id)
            return newCart.length > 0 ? true: false
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
    // function handleCloseModal() {
    //     setModal(false);
    // }
    return (
        <productContext.Provider
            value={{
                productsData: state.productsData,
                cardDetails: state.cardDetails,
                allPages: state.allPages,
                cartLength: state.cartLength,
                basket: state.basket,
                getCards,
                postNewCard,
                getCardDetails,
                setPage,
                getCart,
                saveCard,
                addProductToCard,
                changeProductCount,
                checkProductInCart
            }}
        >
            {children}
        </productContext.Provider>
    );
};
export default ProductContextProvider;

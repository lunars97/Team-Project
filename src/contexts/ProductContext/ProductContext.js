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
        case "GET_CART":
                return {...state, basket: action.payload}
    
        case "CHANGE_CART_COUNT":
                return {...state, cartLength: action.payload}
                
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

    useEffect(() => {
        getCards();
    }, [page]);

    async function getCards(history) {
        // const search = new URLSearchParams(history.location.search);
        // search.set("_limit", 8);
        // history.push(`${history.location.pathname}${search.toString()}`);
    // useEffect(() => {
    //     console.log("asd")
    //     getCards();
        
    // }, [state.productsData]);

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

    function deleteFromCart(id) {
        let basket = JSON.parse(localStorage.getItem('cart'));
        console.log(basket);
        basket.products = basket.products.filter((elem) => elem.item.id !=id)
        localStorage.setItem("cart", JSON.stringify(basket))
        getCart();
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
        getCards();
        
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
                cartLength: state.cartLength,
                basket: state.basket,
                getCards,
                postNewCard,
                patchNewCard,
                getCardDetails,
                setPage,
                getCart,
                saveCard,
                addProductToCard,
                changeProductCount,
                checkProductInCart,
                deleteFromCart,
                deleteCar,
                addComment,
                handleCloseModal,
                getCardEdit,
            }}
        >
            {children}
        </productContext.Provider>
    );
};
export default ProductContextProvider;

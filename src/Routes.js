import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddCard from "./components/AddCard/AddCard";
import ProductList from "./components/ProductList/ProductList";
import ProductCard from "./components/ProductCard/ProductCard";

import ProductContextProvider from "./contexts/ProductContext/ProductContext";
<<<<<<< HEAD
import AuthContextProvider from "./contexts/AuthContext/AuthContext";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
=======
import Header from "./components/Header/Header";
import Container from "./components/Container/Container";
import Home from "./components/Home/Home";


>>>>>>> 424b6ffefc15bcfb9e790297efc6117956a55e3e

const Routes = () => {
    return (
        <ProductContextProvider>
<<<<<<< HEAD
            <AuthContextProvider>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/add" component={AddCard} />
                        <Route exact path="/list" component={ProductList} />
                        <Route exact path="/main" component={ProductCard} />
                        <Route exact path ="/login" component = {SignIn}/>
                        <Route exact path="/signup" component={SignUp} />
                    </Switch>
                </BrowserRouter>
            </AuthContextProvider>
=======
            <BrowserRouter>
                <Switch>
                    <Route exact path="/"    component={Home} />
                    <Route exact path="/container" component={Container} />
                    <Route exact path="/header" component={Header} />
                    <Route exact path="/add" component={AddCard} />
                    <Route exact path="/list" component={ProductList} />
                    <Route exact path="/main" component={ProductCard} />
                </Switch>
            </BrowserRouter>
>>>>>>> 424b6ffefc15bcfb9e790297efc6117956a55e3e
        </ProductContextProvider>
    );
};

export default Routes;

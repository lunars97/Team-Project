import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import AddCard from "./components/AddCard/AddCard";
import ProductList from "./components/ProductList/ProductList";
import ProductContextProvider from "./contexts/ProductContext/ProductContext";
import CardDetails from "./components/CardDetails/CardDetails";
import CarInfo from "./components/CarInfo/CarInfo";

const Routes = () => {
    return (
        <ProductContextProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/container" component={Container} />
                    <Route exact path="/header" component={Header} />
                    <Route exact path="/add" component={AddCard} />
                    <Route exact path="/list" component={ProductList} />
                    <Route exact path="/details/:id" component={CardDetails} />
                    <Route exact path="/carinfo" component={CarInfo} />
                </Switch>
            </BrowserRouter>
        </ProductContextProvider>
    );
};

export default Routes;

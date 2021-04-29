import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import AddCard from "./components/AddCard/AddCard";
import ProductList from "./components/ProductList/ProductList";
import ProductContextProvider from "./contexts/ProductContext/ProductContext";
import CardDetails from "./components/CardDetails/CardDetails";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import AuthContextProvider from "./contexts/AuthContext/AuthContext";

const Routes = () => {
    return (
        <ProductContextProvider>
            <AuthContextProvider>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/container" component={Container} />
                        <Route exact path="/header" component={Header} />
                        <Route exact path="/add" component={AddCard} />
                        <Route exact path="/list" component={ProductList} />
                        <Route exact path="/details/:id" component={CardDetails} />
                        <Route exact path ="/login" component = {SignIn}/>
                        <Route exact path="/signup" component={SignUp} />
                    </Switch>
                </BrowserRouter>
            </AuthContextProvider>
        </ProductContextProvider>
    );
};

export default Routes;

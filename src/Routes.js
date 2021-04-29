import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddCard from "./components/AddCard/AddCard";
import ProductList from "./components/ProductList/ProductList";
import ProductCard from "./components/ProductCard/ProductCard";

import ProductContextProvider from "./contexts/ProductContext/ProductContext";
import AuthContextProvider from "./contexts/AuthContext/AuthContext";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";

const Routes = () => {
    return (
        <ProductContextProvider>
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
        </ProductContextProvider>
    );
};

export default Routes;

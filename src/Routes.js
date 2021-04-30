import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import AddCard from "./components/AddCard/AddCard";
import ProductContextProvider from "./contexts/ProductContext/ProductContext";
import CardDetails from "./components/CardDetails/CardDetails";
import ProductList from "./components/ProductList/ProductList";
import ProductCard from "./components/ProductCard/ProductCard";
import AuthContext from "./contexts/AuthContext/AuthContext";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";

const Routes = () => {
    return (
        <AuthContext>
            <ProductContextProvider>
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={ProductList} />
                        <Route exact path="/add" component={AddCard} />
                        <Route
                            exact
                            path="/details/:id"
                            component={CardDetails}
                        />
                        <Route exact path="/login" component={SignIn} />
                        <Route exact path="/login" component={SignUp} />
                    </Switch>
                </BrowserRouter>
            </ProductContextProvider>
        </AuthContext>
    );
};

export default Routes;

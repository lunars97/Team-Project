import React, { useEffect, useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import AddCard from "./components/AddCard/AddCard";
import ProductContextProvider from "./contexts/ProductContext/ProductContext";
import ProductList from "./components/ProductList/ProductList";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import AuthContextProvider, {
    authContext,
} from "./contexts/AuthContext/AuthContext";
import PaymentCard from "./components/PaymentCard/PaymentCard";
import Basket from "./components/Basket/Basket";
import CardDetails from "./components/CardDetails/CardDetails";
import CarEdit from "./components/CarEdit/CarEdit";
import Home from "./components/Home/Home";
import Container from "./components/Container/Container";

const Routes = () => {
    const { checkAuth } = useContext(authContext);
    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            checkAuth(token);
        }
    }, []);
    return (
        <AuthContextProvider>
            <BrowserRouter>
                <ProductContextProvider>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={ProductList} />
                        <Route exact path="/add" component={AddCard} />
                        <Route
                            exact
                            path="/details/:carId"
                            component={CardDetails}
                        />
                        <Route exact path="/edit/:id" component={CarEdit} />
                        <Route exact path="/login" component={SignIn} />
                        <Route exact path="/signup" component={SignUp} />
                        <Route exact path="/payment" component={PaymentCard} />
                        <Route exact path="/basket" component={Basket} />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/container" component={Container} />
                        <Route exact path="/header" component={Header} />
                    </Switch>
                </ProductContextProvider>
            </BrowserRouter>
        </AuthContextProvider>
    );
};
export default Routes;

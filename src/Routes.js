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
import Basket from "./components/Basket/Basket"
import CardDetails from "./components/CardDetails/CardDetails";

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
                        <Route exact path="/signup" component={SignUp} />
                        <Route exact path="/payment" component={PaymentCard} />
                        <Route exact path="/basket" component={Basket} />
                    </Switch>
                </BrowserRouter>
            </ProductContextProvider>
        </AuthContextProvider>
    );
};
export default Routes;

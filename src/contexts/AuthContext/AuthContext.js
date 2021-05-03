import axios from "axios";
import React, { useReducer } from "react";
import { AUTH_API } from "../../Helpers/constants";
import jwt_decode from "jwt-decode";

export const authContext = React.createContext();
const INIT_STATE = {
    user: {},
    useAuth: false,
};
const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "AUTH":
            return { ...state, user: action.payload, isAuth: true };
        default:
            return state;
    }
};
const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    async function registerUser(e, history) {
        e.preventDefault();
        console.log(e);
        const newUser = {
            email: e.target[0].value,
            password: e.target[2].value,
        };
        console.log(e.target);
        try {
            const { data } = await axios.post(
                `${AUTH_API}/api/auth/register`,
                newUser
            );
            history.push("/login");
            const decoded = jwt_decode(data.access_token);
        } catch (err) {
            // console.log(err.response);
        }
    }

    async function loginUser(e, history) {
        e.preventDefault();
        console.log(e);
        const user = {
            email: e.target[0].value,
            password: e.target[2].value,
        };
        try {
            const { data } = await axios.post(
                `${AUTH_API}/api/auth/login`,
                user
            );
            console.table(e.target);
            history.push("/");
            const decoded = jwt_decode(data.token);

            localStorage.setItem("token", decoded);
            if (data) {
                dispatch({
                    type: "AUTH",
                    payload: data,
                });
            }
            localStorage.setItem("token", data.token);
        } catch (err) {
            console.log(err.response);
        }
    }
    async function checkAuth(token) {
        const user = {
            // email: e.target[0].value,
            // password: e.target[2].value,
        };

        const { data } = await axios.post(`${AUTH_API}/api/auth/login`, user);
        token = localStorage.getItem("token");
        const decoded = jwt_decode(token);
        localStorage.getItem("token");

        if (user) {
            dispatch({
                type: "AUTH",
                payload: data,
            });
        }
    }

    return (
        <authContext.Provider
            value={{
                registerUser,
                loginUser,
                checkAuth,
            }}
        >
            {children}
        </authContext.Provider>
    );
};
export default AuthContextProvider;

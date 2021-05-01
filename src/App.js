import React from "react";
import "./App.css";
import AuthContextProvider from "./contexts/AuthContext/AuthContext";
import Routes from "./Routes";

function App() {
    return (
        <AuthContextProvider>
            <Routes></Routes>
        </AuthContextProvider>
    );
}

export default App;

import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux'

import {ToastContainer} from 'react-toastify';

import GlobalStyles from "./styles/GlobalStyles";
import Routes from "./routes";
import Header from "./components/Header";

import store from "./store";

export default function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <GlobalStyles/>
                <Header/>
                <Routes/>
                <ToastContainer autoClose={2000}/>
            </BrowserRouter>
        </Provider>
    )
}

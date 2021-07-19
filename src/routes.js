import React from "react";
import {Switch, Route} from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Description from "./pages/Description";

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/carrinho" component={Cart}/>
            <Route path="/descricao" component={Description}/>
        </Switch>
    )
}

export default Routes

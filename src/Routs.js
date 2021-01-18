import React from 'react'

import { Route, Redirect, Switch} from "react-router-dom"

/* Vistas */
import Home from "./componets/Home/Index";
import Details from "./componets/Details/Index";

export default function Routs() {
    return (
            <Switch>
                <Route exact path="/Home" component={Home}/>
                <Route exact path="/Details" component={Details}/>
                <Redirect from="/" to="/Home"/>
            </Switch>
    )
}

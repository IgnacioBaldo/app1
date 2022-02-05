import React from "react"
import {BrowserRouter, Route, Routes as Switch } from "react-router-dom"
import ItemListContainer from "../Components/ItemListContainer";
import Navbar2 from "../Components/navBar";
import NotFound from "../Components/notfound/notfound";




const Routes = () => {
    return (
        <BrowserRouter>
            <Navbar2 />
            <Switch>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category" element={<ItemListContainer />} />
                <Route path="*" element={<NotFound />} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
import React from "react"
import {BrowserRouter, Route, Routes as Switch } from "react-router-dom"
import ItemDetailContainer from "../Components/ItemDetailsContainer";
import ItemListContainer from "../Components/ItemListContainer";
import Navbar2 from "../Components/navBar";
import NotFound from "../Components/notfound/notfound";
import Cart from "./Cart";




const Routes = () => {
    return (
        <BrowserRouter>
            <Navbar2 />
            <Switch>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:id" element={<ItemListContainer />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="*" element={<NotFound />} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
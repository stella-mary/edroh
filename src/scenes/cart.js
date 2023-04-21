import { useState, useEffect } from 'react'
import './cart/cartDetails/cart.css';
import CartDetails from './cart/cartDetails/cartDetails';
import OrderSummary from './cart/orderSummary/orderSummary'
import { navigate, useNavigate } from "react-router-dom";

const Cart = () => {

    const navigate = useNavigate();

    return (
        <div className='cart'>
            <CartDetails />
            <OrderSummary />
        </div >
    )
}


export default Cart
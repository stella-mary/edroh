import { useState, useEffect } from 'react'
import './cart/cartDetails/cart.css';
import BillAddress from './bill/billAddress/billAddress';
import OrderSummary from './bill/orderSummary/orderSummary'
import { navigate, useNavigate } from "react-router-dom";
import StepperBar from './payment/stepperBar/stepperBar';

const Bill = () => {

    const navigate = useNavigate();

    return (
        <div>
            <StepperBar />
            <div className='cart'>
                <BillAddress />
                <OrderSummary />
            </div >
        </div>
    )
}


export default Bill
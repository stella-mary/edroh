import { useState, useEffect } from 'react'
import './payment/paymentMethod/payment.css';
import PaymentMethod from './payment/paymentMethod/paymentMethod';
import PaymentBill from './payment/paymentBill/paymentBill'
import PaymentSummary from './payment/paymentSummary/paymentSummary'
import { navigate, useNavigate } from "react-router-dom";
import StepperBar from './payment/stepperBar/stepperBar';

const Payment = () => {

    const navigate = useNavigate();

    return (
        <div>
            <StepperBar />
            <div className='payment'>

                <PaymentMethod />
                <div className='payment1'>
                    <PaymentBill />
                    <PaymentSummary />
                </div>
            </div >
        </div>
    )
}


export default Payment
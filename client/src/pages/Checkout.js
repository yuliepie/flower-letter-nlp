import React from 'react';
import OrderPay from '../components/OrderPay';
import { useLocation } from 'react-router';

const Checkout = ({ history }) => {

  const location = useLocation()
  return (
    <div>
      <p>{location.orderInfo}</p>
    </div>
  );
};

export default Checkout;

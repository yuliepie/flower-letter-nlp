import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Order from '../components/Order';
import { ADD_ORDER } from '../modules/order';

// 리덕스 스토어의 상태 조회, 액션 디스패치. 프리젠테이셔널 컴포넌트 불러와서 사용

function OrderContainer() {
  const order = useSelector((state) => state.order);
  const dispatch = useDispatch();

  return;
}

export default OrderContainer;

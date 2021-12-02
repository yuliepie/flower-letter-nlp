//액션타입 선언
const ADD_ORDER = 'order/ADD_ORDER';

// 액션 생성 함수 선언
export const addName = (text) => ({
  type: ADD_ORDER,
  order: {
    price: '',
    name: '',
    address: '',
    email: '',
    phone: '',
  },
});

//초기 상태 선언
const initialState = {[
    price: 0,
    name: '',
    address: '',
    email: '',
    phone: '',
  ]}

//리듀서 선언
export default function order(state = initialState, action) {
  switch (action.type) {
    case ADD_ORDER:
      return [...state, { name: action.name }];

    default:
      return state;
  }
}


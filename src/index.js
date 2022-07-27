import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { store } from './store';
import { createStore } from 'redux';

const typeDefaultState = {
  types: [],
  products: [],
  cart: []
};

const typeReducer = (state = typeDefaultState, action) => {
  switch (action.type) {
    case "ADD_TYPE":
      return { ...state, types: [...state.types, action.payload] }
    case "ADD_PROD":
      return { ...state, products: [...state.products, action.payload] }
    case "REMOVE_CART":
      return { ...state, cart: [] }
    case "REMOVE_EL_CART":

      let otherProd3 = state.cart
      otherProd3 = otherProd3.filter(el => el.id !== action.payload.id)
      return { ...state, cart: [...otherProd3] }
    case "CHANGE_COUNT":
      let myProd = state.products.find(el => el.id === action.payload.id);
      myProd.count = action.payload.count;
      let otherProd = state.products
      otherProd = otherProd.filter(el => el.id !== action.payload.id)
      return { ...state, products: [...otherProd, myProd] }
    case "CHANGE_COUNT_CART":
      let myProd2 = state.cart.find(el => el.id === action.payload.id);
      myProd2.count = action.payload.count;
      let otherProd2 = state.cart
      otherProd2 = otherProd2.filter(el => el.id !== action.payload.id)
      return { ...state, cart: [...otherProd2, myProd2] }
    case "ADD_CART":
      console.log(action.payload.fil)
      if (action.payload.fil) {
        return { ...state, cart: [...action.payload.fil, { id: action.payload.id, count: action.payload.count }] }
      } else {
        return { ...state, cart: [...state.cart, action.payload] }
      }



    default:
      return state

  }
}

const typeStore = createStore(typeReducer);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store}>
//             <App />
//         </Provider>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={typeStore}>
      <App />
    </Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

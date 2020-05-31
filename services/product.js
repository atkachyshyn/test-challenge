//#region Imports

import { all } from 'redux-saga/effects'

//#endregion

//#region Action types

export const GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST'
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS'

//#endregion

//#region Reducer

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS: {
        return { ...state, ...action.payload }
    }
  
    default: {
        return state
    }
  }
}

//#endregion

//#region Action creators

export const Product = {
  getProducts: () => ({type: GET_PRODUCTS_REQUEST}),
  storeProducts: (payload) => ({type: GET_PRODUCTS_SUCCESS, payload}),
  addToBusket: (payload) => ({type: ADD_TO_BUSKET, payload}),
}

//#endregion

//#region Selectors


//#endregion

//#region Sagas

export function* watchProductSagas() {
  yield all([

  ]);
}

//#endregion

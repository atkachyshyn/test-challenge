//#region Imports

import { all, call, put, takeEvery } from 'redux-saga/effects'
import discount from '../pages/api/discount'

//#endregion

//#region Action types

export const ADD_TO_BASKET = 'ADD_TO_BASKET'

//#endregion

//#region Reducer

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_BASKET: {
        if (action.payload.quantity)
            return { ...state, ...{ [action.payload.id]: { id: action.payload.id, quantity: action.payload.quantity } } }
    }
  
    default: {
        return state
    }
  }
}

//#endregion

//#region Action creators

export const Basket = {
  addToBasket: ({id, quantity}) => ({type: ADD_TO_BASKET, payload: {id, quantity}}),
}

//#endregion

//#region Selectors

//#endregion

//#region Sagas

export function* loadProducts() {
    try {
        const data = yield call(fetch, '/api/product', fetcher)

        yield put(Product.storeProducts({products: data}))
    }
    catch (e) {
        console.log(e)
    }
}

export function* watchProductSagas() {
  yield all([
    yield takeEvery(GET_PRODUCTS_REQUEST, loadProducts),
  ]);
}

//#endregion

//#region Utilities

export const applicableDiscountRules = (discounts, volumeDiscounts, rows) => {

    const applicableDiscountRules = []

    if (volumeDiscounts && volumeDiscounts.length) {
        for (const discount of volumeDiscounts) {
            const row = rows.filter(row => row.id == discount.sourceProductId && row.quantity >= discount.quantity)
            if (row && row.length)
                applicableDiscountRules.push({
                    productId: discount.destinationProductId, 
                    value: discount.value, 
                    isPercent: discount.isPercent,
                    maxTimes: Math.floor(row[0].quantity/discount.quantity) 
                })
        }
    }

    if (discounts && discounts.length) {
        const today = new Date()

        for (const discount of discounts) {
            if (rows.filter(row => row.id == discount.productId && today >= discount.dateFrom && today <= discount.dateTo))
                applicableDiscountRules.push({
                    productId: discount.productId, 
                    value: discount.value, 
                    isPercent: discount.isPercent
                })
        }
    }

    return applicableDiscountRules
}

//#endregion

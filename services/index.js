//#region Root reducer

import { combineReducers } from 'redux'
import { reducer as product } from './product'
import { reducer as basket } from './basket'

export const rootReducer = combineReducers({
    product,
    basket
})

//#endregion

//#region Root saga

// import { all, fork } from 'redux-saga/effects';
import { all, spawn, call } from 'redux-saga/effects';
import { watchProductSagas} from './product' 

export function* rootSaga() {
  const sagas = [
    watchProductSagas,
  ];
  
  /// TODO: to use this root saga, subscription is needed to track the end of data loading
  yield all(sagas.map(saga =>
    spawn(function* () {
      while (true) {
        try {
          yield call(saga);
          break;
        } catch (e) {
          console.log(e);
        }
      }
    }))
  )
}

//#endregion

//#region Utilities

export const fetcher = (url) => fetch(url).then((res) => {
    const response = res.json()

    return response
})

//#endregion
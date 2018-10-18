import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";

import {
  SUBMIT_CUSTOMER_DATA,
  SUBMIT_CUSTOMER_DATA_SUCCESS,
  SUBMIT_CUSTOMER_DATA_FAIL
} from "./customerDataReducer";

//Sagas
function* doSubmitCustomerDataSaga({ payload }) {
  // Remove default redux store properties
  const pureCustomerData = { ...payload };
  Object.keys(pureCustomerData).forEach(key => {
    if (!pureCustomerData[key]) {
      delete pureCustomerData[key];
    }
  });
  delete pureCustomerData.contact.information;

  const resp = yield call(
    axios.post,
    "https://project-1-mailer.herokuapp.com/send",
    pureCustomerData
  );

  if (resp.ok === false) {
    return yield put({
      type: SUBMIT_CUSTOMER_DATA_FAIL,
      payload: resp
    });
  }

  yield put({
    type: SUBMIT_CUSTOMER_DATA_SUCCESS
  });
}

export default function* formSaga() {
  yield takeLatest(SUBMIT_CUSTOMER_DATA, doSubmitCustomerDataSaga);
}

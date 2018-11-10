import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { reducer as formReducer } from 'redux-form';
import { appReducer } from './appReducer';
import { customerDataReducer } from './customerDataReducer';
import rootSaga from './rootSaga';

const rootReducer = combineReducers({
  app: appReducer,
  customerData: customerDataReducer,
  form: formReducer,
});

const sagaMiddleware = createSagaMiddleware();
const windowIfDefined = typeof window === 'undefined' ? null : window;
const composeEnhancers = windowIfDefined.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(sagaMiddleware, logger))
);

sagaMiddleware.run(rootSaga);

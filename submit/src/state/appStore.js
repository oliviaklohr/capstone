import { createStore, compose, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware, logger),
    // TODO: comment the following line out when deploying this to prod
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // IGNORE THIS, this is just addef for configuration to allow us to use the redux dev tools nativley in our browser
  ),
);

sagaMiddleware.run(rootSaga);

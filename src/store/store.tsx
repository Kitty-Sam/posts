import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from '@store/redux/reducers/rootReducer';
import rootSaga from '@store/sagas/sagas/rootsaga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, undefined, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

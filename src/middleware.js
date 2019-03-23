import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'

import history from './history'

export const sagaMiddleware = createSagaMiddleware()

export default [routerMiddleware(history), sagaMiddleware]

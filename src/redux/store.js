import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { thunk } from 'redux-thunk'
import rootReducer from './rootReducer'
import { persistStore } from "redux-persist";

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

const persistor = persistStore(store);

export default store
export { persistor };
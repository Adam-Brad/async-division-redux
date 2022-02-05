import React from 'react';
import {render} from 'react-dom';
import {createStore} from "redux";
import {numbersSetReducer} from "./reducers/numbersSetReducer";
import {Provider} from "react-redux";
import {CounterContainer} from "./components/Counter";

// @ts-ignore
const store = createStore(numbersSetReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
    <Provider store={store}>
        <CounterContainer/>
    </Provider>,
    document.getElementById('root')
);

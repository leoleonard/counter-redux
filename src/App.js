import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Counter from "./Counter";
import "./index.css";

const initialState = {
    count: 0
};

function reducer(state = initialState, action) {
    console.log(state, action);
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + 1
            };
        case "DECREMENT":
            return {
                count: state.count - 1
            };
        case "RESET":
            return {
                count: 0
            };
        default:
            return state;
    }
}

const store = createStore(reducer);

const App = () => (
    <Provider store={store}>
        <Counter />
    </Provider>
);

export default App;

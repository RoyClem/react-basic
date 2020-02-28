import React from "react";
import { render } from "react-dom";
import Counter from "./Counter";
import "./index.css";
import thunk from 'redux-thunk';
import{ createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';


const store = createStore(rootReducer, applyMiddleware(thunk));
//console.log(store.getState())

const App = () => (
  <div>
    <Provider store={store}>
      <Counter />
    </Provider>
  </div>
);

render(<App />, document.getElementById("root"));
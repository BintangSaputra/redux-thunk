import React from "react";
import "./App.css";
import Form from "./components/form";
import List from "./components/list";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Form />
      <List />
    </Provider>
  );
}

export default App;

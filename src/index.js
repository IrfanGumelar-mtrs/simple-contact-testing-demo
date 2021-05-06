import React from "react";
import ReactDOM from "react-dom";
import EditContact from "./page/EditContact";
import ListContact from "./page/ListContact";
import CreateContact from "./page/CreateContact";
import { Provider } from "react-redux";
import store from "./store/store";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ListContact />
    </Provider>
    {/* <CreateContact /> */}

    {/* <EditContact /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

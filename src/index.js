import React from "react";
// import ReactDOM from 'react-dom/client'; //v.18
import ReactDOM from "react-dom"; //v.17
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//version 18
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

//syntax version 17
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

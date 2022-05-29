import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from "react-redux";
import store from "redux/store";
import {BrowserRouter} from "react-router-dom";
import AppRoute from "./routes/app.route";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
       <Provider store={store} >
           <AppRoute/>
       </Provider>
   </BrowserRouter>
);


import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {createStore} from "@reduxjs/toolkit";

const container = document.getElementById('root');
const root = createRoot(container);

const reducers = (state, action) => {

  if (action.type === "TITLE") {
    return {
      ...state,
      title: "newTitle",
    }
  }

  switch (action.type) {
    case "LAUNCH_GUIDE":
      return {
        ...state,
        isLaunchGuide: true,
        isMyCompany: false,
        isInviteYourTeam: false,
        isMyReports: false,
      };
    case "MY_COMPANY":
      return {
        ...state,
        isLaunchGuide: false,
        isMyCompany: true,
        isInviteYourTeam: false,
        isMyReports: false,
      };
    case "INVITE_TEAM":
      return {
        ...state,
        isLaunchGuide: false,
        isMyCompany: false,
        isInviteYourTeam: true,
        isMyReports: false,
      };
    case "MY_REPORTS":
      return {
        ...state,
        isLaunchGuide: false,
        isMyCompany: false,
        isInviteYourTeam: false,
        isMyReports: true,
      };



  }

  return {
    title: "ANKO Technologies Corp",
    isLaunchGuide: true,
    isMyCompany: false,
    isInviteYourTeam: false,
    isMyReports: false,
  }
}

const store = createStore(reducers);

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

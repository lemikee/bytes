import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";

// document.addEventListener('DOMContentLoaded', () => {
//   const root = document.getElementById("root");

//   ReactDOM.render(<h1>My super awesome app is on it's way...</h1>, root);
// });

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;

  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
      },
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.getState = store.getState;

  ReactDOM.render(<Root store={store} />, root);
});

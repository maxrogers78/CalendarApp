// React
import React from "react";
// Redux
import { Provider } from "react-redux";
// store
import generateStore from "./redux/store";
// Components
import AppRouter from "./router/AppRouter";

const CalendarApp = () => {
  const store = generateStore();

  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default CalendarApp;

import React from "react";
import { store, persistor } from "../store/store.js";
import { Provider } from "react-redux";
import TaskManager from "../components/taskManager.js";
import { PersistGate } from "redux-persist/integration/react";

function TaskManagerRewritten(props) {
  return (
    <Provider store={store} props={props}>
      <PersistGate loading={null} persistor={persistor}>
        <TaskManager {...props} />
      </PersistGate>
    </Provider>
  );
}

export default TaskManagerRewritten;

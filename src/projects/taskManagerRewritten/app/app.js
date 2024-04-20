import React from "react";
import {store} from '../store/store.js';
import { Provider } from 'react-redux'
import TaskManager from "../components/taskManager.js";

function TaskMangerRewritten(props) {
    return (
        <Provider store={store}>
            <TaskManager props={props}/>
        </Provider>
    )
}

export default TaskMangerRewritten;
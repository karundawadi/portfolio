import React from "react";
import {store} from '../store/store.js';
import { Provider } from 'react-redux'
import TaskManager from "../components/taskManager.js";

function TaskManagerRewritten(props) {
    return (
        <Provider store={store} props={props}>
            <TaskManager {...props}/>
        </Provider>
    )
}

export default TaskManagerRewritten;
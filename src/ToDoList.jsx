import React from "react";
import state from './state'
import reRendererTree from "./render";
import Text from "./Text";

const ToDoList = () => {

    let newTaskElement = React.createRef();
    let taskElements = state.array.map(t => <Text element={t} />);

    let addNewTask = () => {
        let text = newTaskElement.current.value;
        if (text !== '') {
            state.array.push(text);
            text = '';
        }

        reRendererTree(state);
    }

    return (
        <div>
            <textarea ref={newTaskElement} ></textarea>
            <button onClick={addNewTask}>Add</button>
            <div>
                {taskElements}
            </div>
        </div>
    )
}

export default ToDoList;
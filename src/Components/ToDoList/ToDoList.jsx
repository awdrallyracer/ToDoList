import React from "react";
import reRendererTree from "../../render";
import Text from "../Text/Text";
import l from "./ToDoList.module.css"
import state from "../../state";

const ToDoList = () => {

    let newTaskElement = React.createRef();
    let taskElements = state.array.map(t => <Text element={t} key={t} />);

    let addNewTask = () => {
        let text = newTaskElement.current.value;
        if (text !== '') {
            state.array.push(text);
            text = '';
            reRendererTree(state);
        }
        text = '';
            reRendererTree(state);
    }

    return (
        <div className={l.center}>
            <textarea ref={newTaskElement} className={l.textarea}></textarea>
            <div>
            <button onClick={addNewTask} className={l.button} >Add</button>
            </div>

            <div>
                {taskElements}
            </div>
        </div>
    )
}

export default ToDoList;
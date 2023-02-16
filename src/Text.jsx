import React from "react";
import state from "./state";
import reRendererTree from "./render";

const Text = (props) => {

    let task = React.createRef();
    let deleteFromList = () =>{
        let t = task.current.value;
        state.array.pop(t);
        reRendererTree();
    }

    return (
        <div>
            <li ref={task}>{props.element} <button onClick={deleteFromList}>Delete</button></li>
        </div>
    )
}

export default Text;
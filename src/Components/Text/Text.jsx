import React from "react";
import state from "../../state";
import reRendererTree from "../../render";
import s from "./Text.module.css"

const Text = (props) => {

    let task = React.createRef();
    let deleteFromList = () =>{
        let t = task.current.value;
        state.array.pop(t);
        reRendererTree();
    }

    return (
        <div className={s.center}>
            <li ref={task}>{props.element} <button onClick={deleteFromList} className={s.button} >Delete</button></li>
        </div>
    )
}

export default Text;
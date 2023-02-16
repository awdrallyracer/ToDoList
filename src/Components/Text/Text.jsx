import React from "react";
import reRendererTree from "../../render";
import s from "./Text.module.css"
import state from "../../state";

const Text = (props) => {

    let task = React.createRef();

    let deleteFromList = () =>{
        let t = task.current.value;
        state.array.pop(t);
        reRendererTree(state);
    }

    return (
        <div className={s.center}>
            <li key={props.element} ref={task}>{props.element} <button onClick={deleteFromList} className={s.button} >Delete</button></li>
        </div>
    )
}

export default Text;
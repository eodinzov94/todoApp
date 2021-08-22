import React, {useContext, useRef, useState} from 'react';
import './Todo-item.css'
import '../../CommonStyles/Common.css'
import {AppContext} from "../../../Context/ContextProvider";


const TodoItem = (props) => {
    const {toggleCheckBox, deleteItem,editItem} = useContext(AppContext);
    const [editMode, setEditMode] = useState(false)
    const inputRef = useRef()
    const toggleEdit = () => setEditMode(!editMode)
    const onEdit = () => {editItem(props.id,inputRef.current.value,props.id);toggleEdit()}
    return (
        <div className="todo-item">
            <div className={props.isFinished ? "text-div finished" : "text-div"}>
                <input type="checkbox" defaultChecked={props.isFinished} onChange={() => toggleCheckBox(props.id)}/>
                {editMode ? <input className="text width" defaultValue={props.body} ref={inputRef}/> :
                    <div className="item-body" onDoubleClick={toggleEdit}>{props.body}</div>
                }


            </div>
            <div className="buttons">
                {editMode ? <button className="btn save" onClick={onEdit}>💾</button> :
                    <>
                        <button className="btn edit" onClick={toggleEdit}>✎</button>
                        <button className="btn delete" onClick={() => deleteItem(props.id)}>—</button>
                    </>
                }


            </div>

        </div>
    );
}

export default TodoItem;
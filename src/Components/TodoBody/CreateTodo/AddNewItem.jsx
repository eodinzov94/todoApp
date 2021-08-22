import React, {useContext, useRef, useState} from 'react';
import './AddNewItem.css'
import '../../CommonStyles/Common.css'
import {AppContext} from "../../../Context/ContextProvider";
const AddNewItem = (props) => {
    const inputRef = useRef();
    const {addItem} = useContext(AppContext);
    const [inputVal,setInputVal] = useState('');
    const AddNewTask = ()=> {
        if(inputRef.current.value == '')
            return;
        const task = {
           body: inputRef.current.value,
               isFinished:false,
            id:Date.now()
        }
        addItem(task)
        setInputVal('')

    }
    return (
        <div className="input-new-item">
            <input ref={inputRef} className="text" placeholder="Add new task here" defaultValue={inputVal} onChange={(event) => setInputVal(event.target.value)}/>
            <button className="btn add" onClick={AddNewTask}>+</button>
        </div>
    );
};

export default AddNewItem;
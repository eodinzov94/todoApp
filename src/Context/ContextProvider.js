import React, {createContext, useState} from 'react';

export const AppContext = createContext(null);


const ContextProvider = ({children}) => {
    const [todoList, setTodoList] = useState([]);
    const addItem = (newItem) => {
        const tempList = [...todoList, newItem]
        setTodoList(tempList)
        localStorage.setItem("todoList", JSON.stringify(tempList));
    }
    const deleteItem = (itemId) => {
        const tempList = todoList.filter(item => item.id !== itemId)
        setTodoList(
            tempList
        )
        localStorage.setItem("todoList", JSON.stringify(tempList))
    }
    const getItems = () => {
        const itemList = JSON.parse(localStorage.getItem("todoList"))
        if (itemList)
            setTodoList(itemList);
    }
    const toggleCheckBox = (itemId) => {
        const tempList = todoList.map(item => item.id === itemId ?
            {...item, isFinished: !item.isFinished} : item)
        setTodoList(
            tempList
        )
        localStorage.setItem("todoList", JSON.stringify(tempList))
    }
    const editItem = (itemId, body) => {
        const tempList = todoList.map(item => item.id === itemId ?
            {...item, body} : item)
        setTodoList(
            tempList
        )
        localStorage.setItem("todoList", JSON.stringify(tempList))
    }
    return (
        <AppContext.Provider
            value={{
                todoList,
                getItems,
                addItem,
                toggleCheckBox,
                deleteItem,
                editItem
            }}>
            {children}
        </AppContext.Provider>
    );
};

export default ContextProvider;


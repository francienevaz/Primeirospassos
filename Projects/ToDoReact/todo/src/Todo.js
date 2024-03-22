import React, { useState } from "react";
import './Todo.css';
import List from "./List";
import TodoForm from "./TodoForm";
import Item from "./Item";

function Todo(){

    const  [items, setItems] = useState([]);

    function onAddItem(text){

        let item = new Item(text);

         setItems([...items, item])
    }

    function onItemDeleted(item) {
        
        let filteredItems = items.filter(it=>it.id != item.id);

        console.log(item.id);
        
        setItems(filteredItems);
    }

    return(
        <div className="container">
            <h1>Hello World</h1>
            <TodoForm onAddItem={onAddItem}></TodoForm>
            <List onItemDeleted={onItemDeleted} items={items}></List>

        </div>
    )
}

export default Todo
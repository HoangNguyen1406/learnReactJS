import React from "react";
import TodoForm from "./TodoList/TodoForm";
import TodoList from "./TodoList/TodoList";
import { toast } from "react-toastify";

class Example02 extends React.Component{

    state = {
        todo: [
            { id: '1', name: 'todo01' },
            { id: '2', name: 'todo02' },
        ]
    };

    handleAdd = (title)=>{
        this.setState({
            todo:[...this.state.todo, title],
        });
    }

    handleDelete = (name) =>{
        let currentArr = this.state.todo;
        currentArr = currentArr.filter(item => item.id !== name.id);
        this.setState({
            todo:currentArr,
        });
        toast.error('Deleted');
    }

    handleUpdate = (updateItem)=>{
        let {todo} = this.state;
        let tempFind = [...todo];
        let indexTemp = tempFind.findIndex(item => item.id === updateItem.id);
        tempFind[indexTemp].name = updateItem.name;
        toast.success('updated');
    }

    render(){
        return(
        <div id="contain">
            <TodoForm handleAdd={this.handleAdd}/>
            <TodoList title={this.state.todo} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate}/>
        </div>);
    }
}

export default Example02;
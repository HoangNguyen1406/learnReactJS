import React from "react";
import "./todo.scss";
import { toast } from 'react-toastify';

class TodoForm extends React.Component{

    state={
        title: '',
    }

    handleInput = (e)=>{
        this.setState({
            title: e.target.value,
        });
    }

    handleForm = (e)=>{
        e.preventDefault();
        let name = this.state.title;
        if(!name || name.trim()=== ""){
            toast.error("Bạn chưa nhập dữ liệu");
            return;
        }
        let idRandom = Math.floor(Math.random() * 100);
        const todo ={
            'id': idRandom,
            'name': this.state.title,
        }
        toast.success('Added');
        this.props.handleAdd(todo);
        console.log(todo);

        this.setState({
            title:'',
        });
    }

    render(){
        return(
        <>
        <div id="Todo-form">
            <h1>To do app</h1>
            <form action="#">
                <span>Thêm việc cần làm:</span><br/>
                <input type="text" id="fname" name="fname" value={this.state.title} onChange={(e) => this.handleInput(e)}/>
                <input type="submit" value="add" onClick={(e)=>this.handleForm(e)}/>
            </form>
        </div>
        </>
        );
    }
}
export default TodoForm;
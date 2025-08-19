import React from 'react';

class Example01 extends React.Component{

    onChangeName = (e)=>{
        this.setState({
            name: e.target.value,
        });
    }

    state = {
        name: 'Nguyễn Văn A',
        age: '18',
    }

    render(){
        return(
            <>
            Test Example 01
            <br></br>
            <label>Tên:</label><input type='text' value={this.state.name} onChange={this.onChangeName}/>
            <label>Tuổi:</label><input type='text' value={this.state.age}/>
            Object Human
            <span>
                <p>Name: {this.state.name}</p>
                <p>Tuổi: {this.state.age}</p>
            </span>
            </>
        )
    }
}

export {Example01};
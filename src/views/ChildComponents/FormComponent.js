import React from "react";

class FormComponent extends React.Component{

    state = {
        titleJobs: '',
        salary: '',
    }

    handleTitle = (e)=>{
        this.setState({
            titleJobs: e.target.value,
        });
    }

    handleSalary = (e)=>{
        this.setState({
            salary: e.target.value,
        });
    }

    handleForm = (e)=>{
        e.preventDefault();
        let idRandom = Math.floor(Math.random() * 100);
        const {titleJobs, salary} = this.state;
        const jobAdd = {
            id: idRandom,
            title: titleJobs,
            salary: salary,
        };
        this.props.handleArray(jobAdd);
        this.setState({
            titleJobs: '',
            salary: '',
        })
    }

    render(){
        return(
            <>
                <form action="#">
                    <label for="fname">Title job:</label><br/>
                    <input type="text" id="fname" name="fname" value={this.state.titleJobs} onChange={(e)=> {this.handleTitle(e)}}/><br/>
                    <label for="lname">Salary:</label><br/>
                    <input type="text" id="lname" name="lname" value={this.state.salary} onChange={(e)=> {this.handleSalary(e)}}/><br/>
                    <input type="submit" value="Submit" onClick={this.handleForm}/>
                </form>
            </>
        );
    }
}

export {FormComponent};
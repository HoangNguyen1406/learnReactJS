import React from "react";
import { connect } from "react-redux";

class FormComponent extends React.Component {

    state = {
        titleJobs: '',
        salary: '',
    }

    handleTitle = (e) => {
        this.setState({
            titleJobs: e.target.value,
        });
    }

    handleSalary = (e) => {
        this.setState({
            salary: e.target.value,
        });
    }

    handleForm = (e) => {
        e.preventDefault();
        const { titleJobs, salary } = this.state;
        let idRandom = Math.floor(Math.random() * 100);
        // const {titleJobs, salary} = this.state;
        // const jobAdd = {
        //     id: idRandom,
        //     title: titleJobs,
        //     salary: salary,
        // };
        //this.props.handleArray(jobAdd);
        this.props.createUser(idRandom,titleJobs,salary);
        this.setState({
            titleJobs: '',
            salary: '',
        })
    }

    render() {
        return (
            <>
                <form action="#">
                    <label htmlFor="fname">Title job:</label><br />
                    <input type="text" id="fname" name="fname" value={this.state.titleJobs} onChange={(e) => { this.handleTitle(e) }} /><br />
                    <label htmlFor="lname">Salary:</label><br />
                    <input type="text" id="lname" name="lname" value={this.state.salary} onChange={(e) => { this.handleSalary(e) }} /><br />
                    <input type="submit" value="Submit" onClick={this.handleForm} />
                </form>
            </>
        );
    }
}

const storeRedux = (state) => {
    return { data: state.arrJobs };
}

const mapDispatchToProps = (dispatch) => {
    return {
        createUser: (idRandom, titleJobs, salary) => dispatch(
            {
                type: "CREATE_USER", payload: { idRandom, titleJobs, salary }
            }
        )
    }
}

export default connect(storeRedux, mapDispatchToProps)(FormComponent);
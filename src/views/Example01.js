import React from 'react';
import Child01  from './ChildComponents/Child01';
import FormComponent from './ChildComponents/FormComponent';
import { connect } from 'react-redux';

class Example01 extends React.Component{

    state = {
        arrJobs: [
            { id: 'abcJob1', title: 'Developers', salary: '500' },
            { id: 'abcJob2', title: 'Testers', salary: '400' },
            { id: 'abcJob3', title: 'Project managers', salary: '1000' },
        ],
    }

    handleArray = (job) =>{
        this.setState({
            arrJobs: [...this.state.arrJobs,job],
        });
    }

    handleDelete = (job)=>{
        let newJobs = this.state.arrJobs;
        newJobs = newJobs.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: newJobs,
        })
    }

    render(){
        //console.log(">>>>check redux:",this.props.dataJobs);
        return(
            <>
                <FormComponent
                handleArray={this.handleArray}
                />
                <br/>
                <Child01
                arrJobs={this.state.arrJobs}
                handleDelete={this.handleDelete}
                />
            </>
        )
    }
}

const storeRedux = (state) =>{
    return {dataJobs: state.arrJobs}
}

export default connect(storeRedux)(Example01);
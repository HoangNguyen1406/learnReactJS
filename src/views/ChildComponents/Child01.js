import React from 'react';

class Child01 extends React.Component{

    onChangeFirstName = (e)=>{
        this.setState({
            firstName: e.target.value,
        });
    }

    onChangeLastName = (e)=>{
        this.setState({
            lastName: e.target.value,
        });
    }

    state = {
        firstName: '',
        lastName: '',
    }

    render(){

        const {first, last} = this.props;

        return(
            <>
            <form action="/action_page.php">
                <label htmlFor="fname">First name:</label><br/>
                <input type="text"value={first} onChange={this.onChangeFirstName}/><br/>
                <label htmlFor="lname">Last name:</label><br/>
                <input type="text"value={last} onChange={this.onChangeLastName}/><br/>
                <input type="button" value="Submit"/>
            </form>
            </>
        )
    }
}

export {Child01};
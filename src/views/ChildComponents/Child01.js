import React from 'react';
import { connect } from 'react-redux';

class Child01 extends React.Component {

    state = {
        btnShow: true,
    }

    handleClick = () => {
        this.setState({
            btnShow: !this.state.btnShow
        })
    }

    handleOnclick = (item)=>{
        //this.props.handleDelete(item);
        this.props.deleteUser(item);
    }

    render() {
        //console.log(this.props.dataRedux);
        const data = this.props.dataRedux;
        const { arrJobs } = this.props;
        const { btnShow } = this.state;
        return (
            <>
            {btnShow === false ?
                <button onClick={() => { this.handleClick() }}>Show</button>
                :
                <>
                <div className='joblist'>
                    {
                        data && data.length > 0 && data.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {item.title} - {item.salary}$
                                    <span><button onClick={() => this.handleOnclick(item)}>X</button></span>
                                </div>
                                );
                        })
                    }
                </div>
                <button onClick={() => { this.handleClick() }}>Hide</button>
                </>
            }
            </>
        )
    }
}

const storeRedux = (state)=>({dataRedux:state.arrJobs});

const mapDispatchtoProps = (dispatch)=>{
    return{
        deleteUser: (id_user)=>dispatch(
            {type:"DELETE_USER",payload:id_user}
        )
    }
}

export default connect(storeRedux,mapDispatchtoProps)(Child01);
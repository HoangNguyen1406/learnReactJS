import React from 'react';

class Child01 extends React.Component {

    state = {
        btnShow: false,
    }

    handleClick = () => {
        this.setState({
            btnShow: !this.state.btnShow
        })
    }

    render() {

        const { arrJobs } = this.props;
        const { btnShow } = this.state;
        let checkShow = btnShow === true ? 'btnShow=false' : 'btnShow=true';
        return (
            <>
            {btnShow === false ?
                <button onClick={() => { this.handleClick() }}>Show</button>
                :
                <>
                <div className='joblist'>
                    {
                        arrJobs.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {item.title} - {item.salary}$
                                </div>);
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

export { Child01 };
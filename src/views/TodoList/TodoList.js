import React from "react";

class TodoList extends React.Component {

    state = {
        actionShow: true,
        current: {},
    }

    handleShow = () => {
        console.log(this.state.actionShow);
        this.setState({
            actionShow: !this.state.actionShow,
        })
    }

    handleEdit = (item, isEmpty) => {
        if (isEmpty === false && this.state.current.id === item.id) {
            this.props.handleUpdate(this.state.current);
            this.setState({
                current: {},
            })
            return;
        }
        this.setState({
            current: item,
        })
    }

    handleInputEdit = (e) => {
        let inputcopy = { ...this.state.current }
        inputcopy.name = e.target.value;
        this.setState({
            current: inputcopy,
        });
    }

    render() {
        const { title } = this.props;
        let isEmpty = Object.keys(this.state.current).length === 0;
        return (
            <>
                {(this.state.actionShow === false ? <button onClick={this.handleShow}>Show</button>
                    :
                    <>
                        {
                            title.map((item, index) => {
                                return (
                                    <div className="list" key={item.id}>
                                        {isEmpty === true ?
                                            <span>- {item.name}</span>
                                            :
                                            <>
                                                {item.id === this.state.current.id ?
                                                    <span>{index + 1}: <input value={this.state.current.name}
                                                        onChange={(e) => this.handleInputEdit(e)} /></span>
                                                    :
                                                    <span>- {item.name}</span>
                                                }
                                            </>
                                        }
                                        <button onClick={() => this.handleEdit(item, isEmpty)}>
                                            {isEmpty === false && item.id === this.state.current.id ?
                                                "Save"
                                                :
                                                "Edit"
                                            }
                                        </button>
                                        <button onClick={() => { this.props.handleDelete(item) }}>Delete</button>
                                    </div>
                                );
                            })}
                        <br />
                        <button onClick={this.handleShow}>Hide</button>
                    </>
                )
                }
            </>
        );
    }
}


export default TodoList;
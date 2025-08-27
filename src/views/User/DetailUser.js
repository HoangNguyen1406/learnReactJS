import axios from "axios";
import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

class DetailUser extends React.Component {

    state = {
        User: {},
    }

    async componentDidMount() {
        if (this.props.match.params && this.props.match.params.id) {
            let id = this.props.match.params.id
            let respon = await axios.get(`https://reqres.in/api/users/${id}`, {
                headers: {
                    "x-api-key": "reqres-free-v1"
                }
            });
            this.setState({
                User: respon && respon.data && respon.data.data ? respon.data.data : {},
            })
        }
    }

    render() {
        let list = this.state.User;
        return (<>
            <div>
                <h2>User</h2>
                <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%" }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Avatar</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list ?
                            <tr>
                                <td>{list.id}</td>
                                <td><img src={list.avatar} alt="" /></td>
                                <td>{list.first_name}</td>
                                <td>{list.last_name}</td>
                                <td>{list.email}</td>
                            </tr>
                            :
                            <div>error api</div>
                        }
                    </tbody>
                    <button onClick={()=>{this.props.history.push('/users')}}>Back</button>
                </table>
            </div>
        </>);
    }
}

export default withRouter(DetailUser);
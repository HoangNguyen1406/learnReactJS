import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

class Users extends React.Component {

    state = {
        listUsers: [],
    }

    async componentDidMount() {
        let respon = await axios.get("https://reqres.in/api/users?page=1");
        this.setState({
            listUsers: respon && respon.data && respon.data.data ? [...respon.data.data] : [],
        });

        console.log(this.state)
    }

    HandleDetail = (id)=>{
        console.log(id)
        this.props.history.push(`users/${id}`)
    }

    render() {
        let list = this.state.listUsers;
        return (<>
            <div>
                <h2>User List</h2>
                <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%" }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list && list.length > 0 &&
                        list.map(item=>(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.email}</td>
                                <td><button onClick={()=>this.HandleDetail(item.id)}>View Detail</button></td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
        </>);
    }
}

export default withRouter(Users);
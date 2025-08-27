import React from "react";
import Color from "./Color";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

class Home extends React.Component {

    render() {
        return (<div>
            Đây là trang home
        </div>);
    }
}

export default withRouter(Home);
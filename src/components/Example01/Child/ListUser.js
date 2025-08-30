import { useState } from "react";

const ListUser = (props) => {

    const [isShowUser, setIsShowUser] = useState(true);

    const handleToggleShow = () => {
        setIsShowUser(!isShowUser);
    }

    return (<>
        {isShowUser && isShowUser === true &&
            <ul>
                {props.listUser.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        }
        <button onClick={handleToggleShow}>
            {isShowUser && isShowUser === true ? "Hide" : "Show"}
        </button>
    </>);
}

export default ListUser;

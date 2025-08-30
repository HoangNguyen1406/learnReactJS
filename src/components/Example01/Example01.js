import FormUser from "./Child/FormUser";
import ListUser from "./Child/ListUser";
import { useState } from "react";

const Example01 = ()=>{

    const [listUser,setListUser] = useState([
        {id:1,name:'Nguyen Van A'},
        {id:2,name:'Nguyen Van B'},
        {id:3,name:'Nguyen Van C'},
        {id:4,name:'Nguyen Van D'},
        {id:5,name:'Nguyen Van E'},
    ]);

    const handleAddUser = (name)=>{
        setListUser([...listUser,{id:Math.random(),name}]);
    }

    return(<>
    <FormUser handleAddUser={handleAddUser}/>
    <ListUser listUser={listUser} />
    </>);
}

export default Example01;

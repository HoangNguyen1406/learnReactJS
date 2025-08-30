import { useState } from "react";


const FormUser = (props)=>{

    const [inputName,setInputName] = useState("");

    const handleChange = (e)=>{
        setInputName(e.target.value);
    }

    const handleOnclick = (e)=>{
        e.preventDefault();
        props.handleAddUser(inputName);
        setInputName("");
    }

    return(<>
        <form>
            <input type="text" placeholder="Enter name..." value={inputName} onChange={handleChange}/>
            <button className="btn btn-primary" type="submit" onClick={(e)=>handleOnclick(e)}>Add User</button>
        </form>
    </>);

}

export default FormUser;
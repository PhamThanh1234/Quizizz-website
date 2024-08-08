import React, { useState } from "react";
import AddUserinfo from "./AddUserinfor";
import DisplayInfor from "./DisplayInfor";



const MyComponent = (props) =>{
    const listUsers =  [
                    {
                        id: 1,
                        name: "John Doe",
                        age: 25
                    },
                    {
                        id: 2,
                        name: "Jane Doe",
                        age: 30
                    },
                    {
                        id: 3,
                        name: "David Doe",
                        age: 10
                    }
                ]
    const [isListUsers, setUpdateUser] = useState(listUsers)
    const handleAddNewUser = (e) => {
        setUpdateUser([...isListUsers, e])  
    }
    return (
        <div>

                   <AddUserinfo handleAddNewUser = {handleAddNewUser}/>
                    <br></br>
        
                    <DisplayInfor listUsers={isListUsers}/>
                   
                 </div>
    )
}


export default MyComponent;
import React, { useState } from "react";

const AddUserinfo = (props) =>{
    
    const Profile = {
        name: 'World',
        address: " Hoi dan IT",
        age:  "25",
    };
    const [isChanged, setChange] = useState(Profile.name)
    const [isChangedage, setChangeage] = useState(Profile.age)
    const handleOnChange = (e) =>{
    
        setChange(e.target.value)
    }
    const handleOnChangeAge = (e) =>{

        setChangeage(e.target.value)
    }
    const handleOnSubmit = (e) =>{
        e.preventDefault();
        props.handleAddNewUser({
            id: "hardcoode",
            name: isChanged,
            age: isChangedage,
        });
    }
        return (
            <div>
                <h1>Hello, {isChanged}! I {isChangedage}</h1>
                <p>This is a custom component.</p>
                <form onSubmit={(e) =>handleOnSubmit(e)}>
                    <label>Your name:</label>
                    <input type="text"  onChange={handleOnChange} />
                    <label>Your age:</label>
                    <input type="text"  onChange={handleOnChangeAge} />
                    <button>Submit</button>
                </form>
               
            </div>
        )
    
}

export default AddUserinfo;
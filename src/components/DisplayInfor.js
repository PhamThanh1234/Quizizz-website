import React, { useState } from "react";


const DisplayInfor = (props) =>{
    const {listUsers} = props;
    const [isShowHJideListUsers, setShow] = useState(true);
    const handleOnClick = () =>{
                
                setShow(!isShowHJideListUsers);
            }
    return(
        <div>
        <div>
            <button><span onClick={()=>{handleOnClick()}}>{(isShowHJideListUsers=== true)? "Hide list users":"Show list users"}</span></button>
        </div>
        {isShowHJideListUsers &&
        <div >
   { listUsers.map((user) => {
      
        return (
            <div key={user.id} className={(+user.age > 18) ? "green": "red"}>
             <div >My name's {user.name}  </div>
             <div >My age's {user.age} </div>
             <br></br>
            </div>
         )

      
    })}
     </div>
}
    </div>
    )
}

export default DisplayInfor;
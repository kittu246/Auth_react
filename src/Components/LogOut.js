import axios from 'axios'
import React from 'react'

const LogOut = ({token}) => {


async function implementDelete(){

    try{
        const deletedUser = await axios.delete('https://instagram-express-app.vercel.app/api/auth/logout',{
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
        )

        console.log(deletedUser.data);

        alert('user deleted Successfully');

       
    }
    
   


    catch(err){
        console.log(err);

    }
    



  }


return (
    <div>
        <h1>Delete User</h1>
        <button onClick={implementDelete}> Delete User </button>
    </div>
  )
}

export default LogOut
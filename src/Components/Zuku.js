import React,{useState} from 'react';
import axios from 'axios';

const Zuku = ({token}) => {

  const [message,SetMessage] = useState(''); 

//   function inputName (e){  // we willuse separae function to update userInput for all input and differentiate use name attribute  in input tag

//     console.log(e.target);
//     console.log(e.target.name);
//     SetUserName({...userName,[e.target.name]:e.target.value})
//     console.log(userName);

//   }

//   function inputEmail (e){

//     console.log(e.target);
//     SetUserName({...userName,email:e.target.value})

//   }

async function implementMessage(){
    
  try{

    const fechedData = await axios.get('https://instagram-express-app.vercel.app/api/auth/zuku',{

    headers :{
        Authorization :`Bearer ${token}`
      
    }

    });

    console.log(fechedData.data);
    SetMessage(fechedData.data.data.message);
    

    }

    catch(err){
        console.log(err);
    }

    

}




  
  return (
    <div>
        <h1>Messages</h1>
        <div>

            <p>{message}</p>
            <button onClick={implementMessage}>Submit</button>

        </div>
    </div>
  )
}

export default Zuku
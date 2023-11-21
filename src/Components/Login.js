import React,{useState} from 'react';
import axios from 'axios';

const Login = ({SetToken}) => {

  const [userName,SetUserName] = useState({email:'',password:''}); // we will no take 4 useState for separate input rather will take single , and store object
  let {email,password} = userName;

  function inputName (e){  // we willuse separae function to update userInput for all input and differentiate use name attribute  in input tag

    console.log(e.target);
    console.log(e.target.name);
    SetUserName({...userName,[e.target.name]:e.target.value})
    console.log(userName);

  }

//   function inputEmail (e){

//     console.log(e.target);
//     SetUserName({...userName,email:e.target.value})

//   }

async function implementSubmit(e){
    e.preventDefault();

  try{

    const fechedData = await axios.post('https://instagram-express-app.vercel.app/api/auth/login',{

   
    email,
    password

    });

    console.log(fechedData.data);
    SetUserName({email:'',password:''});
    alert("user logged Successfully");
    SetToken(fechedData.data.data.token);

    }

    catch(err){
        console.log(err);
    }

    

}




  
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={implementSubmit} >
            
            <input type='email' name='email' placeholder="Email" onChange={inputName} value={email}></input>
            <input type='text' name='password' placeholder="Password" onChange={inputName} value={password}></input>
            
            <button type='submit'> Submit </button>
        </form>
    </div>
  )
}

export default Login
import React,{useState} from 'react';
import axios from 'axios';

const SignUp = ({SetToken}) => {

  const [userName,SetUserName] = useState({name:'',email:'',password:'',confirmPassword:''}); // we will no take 4 useState for separate input rather will take single , and store object
  let {name,email,password,confirmPassword} = userName;

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

    if(!name || !email || !password){
        alert("field cant be empty");
        return;
    }
    else if(password !== confirmPassword ){
        alert("Password doesnot match");
        return;
    }

    const fechedData = await axios.post('https://instagram-express-app.vercel.app/api/auth/signup',{

    name,
    email,
    password

    });

    console.log(fechedData.data);
    SetUserName({name:'',email:'',password:'',confirmPassword:''});
    SetToken(fechedData.data.data.token);
    alert("user updated Successfully");

    }

    catch(err){
        console.log(err);
    }

    

}




  
  return (
    <div>
        <h1>SignUp</h1>
        <form onSubmit={implementSubmit} >
            <input type='text' name='name' placeholder='Name' onChange={inputName} value={name}></input>
            <input type='email' name='email' placeholder="Email" onChange={inputName} value={email}></input>
            <input type='text' name='password' placeholder="Password" onChange={inputName} value={password}></input>
            <input type='text' name='confirmPassword' placeholder="ConfirmPassword" onChange={inputName} value={confirmPassword}></input>
            <button type='submit'> Submit </button>
        </form>
    </div>
  )
}

export default SignUp
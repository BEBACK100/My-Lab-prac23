import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, } from "firebase/auth";
import app from '../Firebase/firebase.init';


const auth = getAuth(app);

const Register = () => {
  const [success,setSuccess]=useState('')
  const [error,setError]=useState('')
    
   
    const handleSubmit=(event)=>{
      event.preventDefault()
      setSuccess('')
      setError('')
      const email=event.target.email.value;
    const password=event.target.password.value;
    console.log(email,password)
    //password Validation
    if(!/"^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"/.test(password)){
      setError('Minimum eight characters, at least one letter, one number and one special character:')
return
    }
    else if(password.length<8){
      setError('add 5 characters')
    }
    createUserWithEmailAndPassword(auth,email,password)
    .then(result=>{
      const loggedUser=result.user;
      console.log(loggedUser)
      setError('')
      event.target.reset()
      setSuccess('User has been created successfully')
    })
    .catch(error=>{
      console.log(error)
      setError(error.message)
      
    })

   

    }
    return (
        <div>
            <h1>Register page</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder='Write your email' id="" required/>
            <br/>
                <input type="password" name="password" placeholder='Write your password' id="" required />
                <br/>
                <input type="submit" value="Register" />
                <p>{success}</p>
            </form>
            <p>{error}</p>
        </div>
    );
};

export default Register;
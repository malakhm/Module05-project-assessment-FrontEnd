import React from "react";
import {

  MDBCol,
  MDBRow,

} from "mdb-react-ui-kit";
import axios from "axios";
import { useEffect, useState , useContext} from "react";
import {useNavigate} from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleEMail = (e)=>{
        e.preventDefault();
        setEmail(e.target.value)
    } 
    const handleUsername = (e)=>{
      e.preventDefault();
      setUsername(e.target.value)
  } 
    const handlePassword = (e)=>{
        e.preventDefault();
        setPassword(e.target.value)
    } 

    const handleSubmit = async(e)=>{
      e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:8001/api/user/signup`, {
                email,
                password,
                username
            })
            
            if(response.data.status === 200){
             
              navigate('/login')
            }
        } catch (error) {
            console.log(error.message)
        }
    }
  return (
    <>
    <h1>Create a new account: </h1>
    <form className="d-flex flex-column justify-content-center align-self-center justify-self-center mt-5" style={{width:'300px'}}>
      <input
        className="mb-3"
        type="text"
        id="form1Example3"
        placeholder="Username"
        onChange={handleUsername}
      />
      <input
        className="mb-3"
        type="email"
        id="form1Example1"
        placeholder="Email address"
        onChange={handleEMail}
      />
      <input
        className="mb-3"
        type="password"
        id="form1Example2"
        placeholder="Password"
        onChange={handlePassword}
      />

      <MDBRow className="mb-3">
        <MDBCol className="d-flex justify-content-center"></MDBCol>
      
      </MDBRow>

      <button className="btn btn-success" onClick={handleSubmit}>
        Register
      </button>
    </form>
    </>
  );
};

export default Login;

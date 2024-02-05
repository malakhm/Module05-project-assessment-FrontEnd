import React from "react";
import {

  MDBCol,
  MDBRow,

} from "mdb-react-ui-kit";
import axios from "axios";
import { useEffect, useState , useContext} from "react";
import { AuthContext } from '../context/AuthContext'
import {useNavigate} from 'react-router-dom'
const Login = () => {
  const {user , setUser, setToken, token} = useContext(AuthContext)
  const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleEMail = (e)=>{
        e.preventDefault();
        setEmail(e.target.value)
    } 
    const handlePassword = (e)=>{
        e.preventDefault();
        setPassword(e.target.value)
    } 

    const handleSubmit = async(e)=>{
      e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:8001/api/user/login`, {
                email:email,
                password:password
            })
            
            if(response.data.status === 200){
              setUser(response.data.data)
              setToken(response.data.token)
              localStorage.setItem('token', JSON.stringify(response.data.token))
              navigate('/')
            }
        } catch (error) {
            console.log(error.message)
        }
    }
  return (
    <>
    <h1>Log In to your account: </h1>
    <form className="d-flex flex-column justify-content-center align-self-center justify-self-center mt-5" style={{width:'300px'}}>
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
        Sign in
      </button>
    </form>
    </>
  );
};

export default Login;

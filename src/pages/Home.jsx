import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import Product from "../components/Product";
import "./styles/home.css";
import { Link , useNavigate} from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { CFooter , CLink} from '@coreui/react'
const Home = () => {
  const [data, setData] = useState([]);
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8001/api/products`);
      if (response.data.status) {
        setData(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  
  //function in order to log the user out
  const logout = () => {
    localStorage.clear();
    toast.success('logged out successfully!')
    navigate('/ogin')

  }
 
  return (
    <>
    <div className="d-flex flex-column justify-self-center align-self-center align-items-center">
      <h1>All Available Products</h1>
      {!user?
      <>
      <Link to='/login' className="btn btn-dark mb-4">Log In</Link>
      <Link to='/register' className="btn btn-dark">Sign Up</Link>
      </>
      :<Link onClick={logout} className="btn btn-dark mb-4">Log Out</Link>}
      
      
      <div className="Home-main-container d-flex ">
        {data.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>

    </div>
          <CFooter>
          <div>
            <CLink href="https://coreui.io">CoreUI</CLink>
            <span>&copy; 2023 creativeLabs.</span>
          </div>
          <div>
            <span>Powered by</span>
            <CLink href="https://coreui.io">CoreUI</CLink>
          </div>
        </CFooter>
    </>
  );
};

export default Home;

import React from 'react'
import './styles/product.css'
import axios from 'axios'
import { useState,useEffect, useContext } from 'react'
import {AuthContext} from '../context/AuthContext'
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2'
//popup component 


const Pop = () =>{
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(true);
  const handleShow = () => setShow(true);

  return (
    <>
      
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          How Would You like to Pay?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Cash On Delivery
          </Button>
          <Button variant="success">Visa Card</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


const Product = (props) =>{
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()
   //function to add item and make order
   const handleAdd = ()=>{
    if(!user){
      navigate('/login')
      toast.warning('you need to login first !')
    }
    else{
      Swal.fire({
        title: "How Would You Like To Pay?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#EEEEE",
        confirmButtonText: "Cash On Delivery",
        cancelButtonText: "Credit Cart"
      }).then((result) => {
      toast.success('Order Sent !!')
        
        });
      
  }
    
  }
  return (
    <div className='Product-main-component-container' onClick={handleAdd}>
      <img className='Product-img' src={props.item.image} />
      <p>{props.item.name}</p>
      <p className='text-muted'>{props.item.description}</p>
      <b><p>${props.item.price}</p></b>
    </div>
  )
}

export default Product

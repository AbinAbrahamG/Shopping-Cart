import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,reset } from '../reducer/Reducer';

const Counter = () => {
    // const [count, setCount] = useState(0)
    const state=useSelector((state)=>state);
    const dispatch=useDispatch(); //Dispatch function to subscribe to the store
  return (
    <>
    <nav className="navbar bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand ms-auto" href="#">
      <img src="../public/img/cart-logo.jpg" alt="Bootstrap" width="70" height="70"/>{state.counter}
    </a>
  </div>
</nav>
    <h1>Products</h1>
    <div className="card" style={{width:'18rem'}}>
  <img src="../img/half-sleeve-shirts.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Half Sleeve Shirt</h5>
    <a href="#" className="btn btn-primary" onClick={()=>{
            dispatch(increment())
        }}>Add to Cart</a>
    <a href="#" className="btn btn-danger" style={{marginLeft:'10px'}} onClick={()=>{
            dispatch(decrement())
        }}>Remove</a>
  </div>
</div>
    </>
  )
}

export default Counter
import React, { useState } from 'react'

import './Form.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Form({closeModel}) {
  const [data,setData]=useState({
    fname:"",
    email:"",
    message:"",
  })
   



  function setForm(e){


const {name , value} = e.target

setData((preVal)=>{
  return{
    ...preVal ,[name]:value
  }
})

  }
  
function submitForm(){
  toast.success("Congratulations You Have Successfully Fill The Form!");
console.log(data.fname);
console.log(data.email);
console.log(data.message);
if(data.fname===""){
  alert("please Entre Your Name")
}
if(data.email===""){
  alert("please Entre Your Email")
}if(data.message===""){
  alert("please Write Your Query")
 
}
else{
  
}
}

  return (
    <>

<div className='main-form' >


<div className='popup' >

<span> <button className="closeBtn" onClick={()=>closeModel(false)}> X</button></span>

  <h1>Get In Touch</h1> 
  <input type='text' placeholder='Entre Your Name' name='fname'  value={data.fname} onChange={setForm } required />
  <br></br>
  <input type='email' placeholder='Entre Your Email' name='email'  value={data.email} onChange={setForm } required/>
  <br></br>
  <input type='text' placeholder='Entre Your Query' name='message' value={data.message} onChange={setForm} required/>
  <br></br>
  <button className='btn' onClick={submitForm} >Submit</button>

  {data.fname && data.email && data.message ? <ToastContainer position="top-center" /> : <p>  </p> }

</div>
  


        </div>


    </>
  )
}

export default Form
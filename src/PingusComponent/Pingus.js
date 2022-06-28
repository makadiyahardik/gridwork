import React, { useState } from 'react'
import Form from '../FormCompone/Form'
import Reveal from 'react-reveal/Reveal';
import './Ping.css'
function Pingus() {
  const [model,setModel]=useState(false)
  function getForm(){
    setModel(true)
  }

  return (
  <>

  <div className='main-ping' id='ping'>

<div className='images-ping'>
{model&& <Form closeModel={setModel}/>}
    <img src='./images/gdpr.jpg' alt='loading'/>
</div>


<div className='ping-text'>
<Reveal effect="fadeInUp">
    <h3>Like what you see?<br></br>
Contact us</h3>
</Reveal>
<button onClick={()=>getForm(true)}>Contact us</button>
</div>
<div className='footer'>  
        <p>GRIDWORKS @all Right Reserved 2022 Privacy | Policy</p>
        </div>
        </div>

  </>
  )
}

export default Pingus
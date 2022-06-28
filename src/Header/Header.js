import React from 'react'
import './Header.css'
function Header() {
  

  return (
    <>
    <div className='header-colum'>
<div className='nav'>

<div className='logo'>

{/* <img src='./images/glogo.png' alt='logo'/> */}

 <h1>GRIDWORKS</h1> 

</div>

<div className=  "menu-links">
 <li><a className='tablet' href='#home'>Home</a></li>
 <li><a className='tablet' href='#about'>About</a></li>
 <li><a className='tablet' href='#product'>Product</a></li>
 <li><a className='tablet' href='#ping'>ping Us</a></li>

</div>


</div>

  </div>
    </>
  )
}

export default Header
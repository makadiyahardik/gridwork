import React from 'react'
import Fade from 'react-reveal/Fade';
import './Product.css'
function Product() {
  return (
   <>


<div className='main-product' id='product'>
     <h1>Our Product Suite</h1>
<div className='product-card-main'>
<Fade bottom>

    <div className='common-product'>
        <img src='./images/ecommerce.png' alt='loading'/>
        <div className='product-text'>
            <h5>E-Commerce 360</h5>
            <p>Build your website, android and IOS ProductPages with your own brand guidelines in just 2 weeks</p>
        </div>
    </div>


    <div className='common-product' id='yellow'>
        <img src='./images/pos.png' alt='loading'/>
        <div className='product-text'>
            <h5>Order Management System</h5>
            <p>Build your website, android and IOS ProductPages with your own brand guidelines in just 2 weeks</p>
        </div>
    </div>

    <div className='common-product' id='skyBlue'>
        <img src='./images/order_managment.png' alt='loading'/>
        <div className='product-text'>
        <h5>Order Management System</h5>
            <p>Build your website, android and IOS ProductPages with your own brand guidelines in just 2 weeks</p>
        </div>
    </div>

    <div className='common-product'>
        <img src='./images/smart_inventory.png' alt='loading'/>
        <div className='product-text'>
            <h5>Smart Inventory</h5>
            <p>Optimise inventory for a better ROI. AI driven forecasting demand and replenishment system.</p>
        </div>
    </div>

    <div className='common-product second-last' id='yellow'>
        <img src='./images/community.png' alt='loading'/>
        <div className='product-text'>
            <h5>Community</h5>
            <p>Build, communicate, reward and engage your loyal customers.</p>
        </div>
    </div>

    <div className='common-product' id='skyBlue'>
        <img src='./images/organise.png' alt='loading'/>
        <div className='product-text'>
            <h5>Organise</h5>
            <p>Train and organise your team and their functions. From rewards program to task tracking.</p>
        </div>
    </div>
    </Fade>
</div>

     </div>

   </>
  )
}

export default Product
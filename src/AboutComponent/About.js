import React from 'react'
import './About.css'
function About() {
  return (
    <>
        
        <div className='main-about' id='about'>

<div className='common-about'>

    <div className='content'>
        <img src='./images/Group1.svg' alt='loadimg' />
        <div className='text-about'>
            <h4>Our Focus</h4>
            <p> Delivering omni-channel experience with our AI enabled platforms backed by strong data science models increases business revenue by 2% and reduces cost by 5%</p>
        </div>
    </div>
    <div className='content'>
        <img src='./images/Group2.svg' alt='loadimg' />
        <div className='text-about'>
            <h4>Opportunity</h4>
            <p> Remarkably, 52% of retail CEOs stated they haven’t defined or started implementing a digital transformation strategy</p>
        </div>
    </div>
    <div className='content'>
        <img src='./images/Group3.svg' alt='loadimg' />
        <div className='text-about'>
            <h4>What we provide</h4>
            <p> A suite of AI enabled SaaS platforms, specially curated for retailers to step and excel into the world of online business</p>
        </div>
    </div>
</div>
</div>
    </>
  )
}

export default About
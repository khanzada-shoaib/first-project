import React from 'react'
import './Newsletter.css'
import { CgMail } from "react-icons/cg";
import img17 from '../assets/img17.jpg'
const Newsletter = () => {
  return (
    <div className='newsletter'>
        <div className='left-sletter'>
            <h1>Newsletter</h1>
            <p>Don`t miss any update about new offer & Discounts</p>
            <button>Subscribe</button>
            <div className='input-field'>
            <input type='text' className='input' placeholder='Enter Your Email Adress'/>
            <CgMail  className='icon' size={40}/>
            </div>
        </div>
        <div className='right-sletter'>
          <img src={img17} alt='sofa' className='img17'/>
        </div>
    </div>
  )
}

export default Newsletter
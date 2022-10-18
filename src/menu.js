import React from 'react'
import './App.scss';
import {Link} from 'react-router-dom';
export const Menu = () => {
  return (
    <div className='menuList'>

      <nav className='menu3'>
        <Link className='link2' to='/Features'>
            <div>Features</div>
        </Link>
        <Link to='/Pricing' className='link2'>
            <div>Pricing</div>
        </Link>
        <Link to='/Resources' className='link2'>
            <div>Resources</div>
        </Link>
      </nav> 

      <div className='loginSignUp'>
        <Link to='/Login' className='link2'>
            <div>Login</div>
        </Link>
        
        <div  className='signup'>
            <Link to='/Sign_Up' className='link2'>
                <button>Sign Up</button>
            </Link>
        </div>
      </div>
      
    </div>
  )
}

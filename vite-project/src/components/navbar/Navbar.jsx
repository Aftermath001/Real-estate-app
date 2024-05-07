import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './navbar.scss'


function Navbar() {
  const [open, setOpen] = useState(false);
  const user = true;

  return (
    <nav>
        <div className="left">
          <a href="/" className="logo">
            <img src="/housinglogo.png" alt="Logo" />
            <span>HOUSING BORA</span>
          </a>

          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          
        </div>
        <div className="right">
          {user ? (
            <div className="user">
              <img src='https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D' alt='userprofile'/>
              <span>John Doe</span>
              <Link to="/profile" className='profile'>
                <div className="notification">3</div>
                <span>Profile</span>
                
              </Link>
            </div>
          ) : (
            <>
            <a href="/">Sign In</a>
            <a href="/" className="register">Sign Up</a>
            </>
          )  }
          <div className="menuIcon">
            <img src="/menu.png" alt="menu" onClick={()=>setOpen((prev) => !prev)}/>
          </div>
          <div className={open ? "menu active" : "menu"}>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Agents</a>
            <a href="/">Sign In</a>
            <a href="/">Sign Up</a>
          </div>
        </div>
    </nav>
  )
}

export default Navbar
import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo1.png'
const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <Link to="/"><img src={logo} alt="" /></Link>
        <li className="create-account"><Link to="/signup">Join as User</Link></li>
        <li className="create-account"><Link to="/signup">Join as Worker</Link></li>
        <li className="create-account"><Link to="/">Task Finder</Link></li>
        <li className="create-account"><Link to="/signup">About us</Link></li>
      </div>
      <Link to="/workerinfo"><h1>👦🏻</h1></Link>
    </div>
  )
}

export default Navbar

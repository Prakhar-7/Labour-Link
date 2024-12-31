import React from 'react'
import './UserLogin.css'
import { Navbar } from '../../components'

const UserLogin = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="userLogin">
        <div className="userLoginForm">
          <header className="userLogin-header">
            <h1>Signup</h1>
            <p>It just takes 30 seconds</p>
          </header>
          <main className="userLogin-main">
            <form action="#">
              <p>
                <label htmlFor="image">Upload Image :</label>
                <input type="file" id="image" required/>
              </p>
              <p>
                <label htmlFor="name">Enter Name :</label>
                <input type="text" placeholder="Baby John" id="name" required/>
              </p>
              <p>
                <label htmlFor="email">Enter Email :</label>
                <input type="email" placeholder="babyjohn123@gmail.com" id="email" required/>
              </p>
              <p>
                <label htmlFor="password">Enter Password :</label>
                <input type="password" placeholder="password" id="password" required/>
              </p>
                <button type="submit">Create Account</button>
            </form>
          </main>
          <footer className="userLogin-footer">
            <p>
              Already have an account? <a href="#">SignIn</a>
            </p>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default UserLogin

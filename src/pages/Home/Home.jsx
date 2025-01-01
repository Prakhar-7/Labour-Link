import React from 'react'
import { Navbar, Hero, List, Footer } from '../../components'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <Hero className="section" />
      <List className="section" />
      <Footer className="section" />
    </div>
  )
}

export default Home

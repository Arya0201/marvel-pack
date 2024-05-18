import React from 'react'
import "./Home.css"
import Slider from '../Slider/Slider'
import About from '../About/About'
import Gallery from '../Gallery/Gallery'
import Feature from '../Feature/Feature'
const Home = () => {
  return (
    <main>
       <Slider/>
       <About/>
       <Gallery/>
       <Feature/>
    </main>
  )
}

export default Home
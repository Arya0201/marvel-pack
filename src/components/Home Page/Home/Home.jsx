import React from 'react'
import "./Home.css"
import Slider from '../Slider/Slider'
import About from '../About/About'
import Gallery from '../Gallery/Gallery'
const Home = () => {
  return (
    <main>
       <Slider/>
       <About/>
       <Gallery/>
    </main>
  )
}

export default Home
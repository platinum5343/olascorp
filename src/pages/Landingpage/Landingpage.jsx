import React from 'react'
import Home from '../../components/Home/Home'
import Myproduct from '../../components/MyProducts/MyProduct'
import Slider from '../../components/slider/Slider'

const Landingpage = () => {
  return (
    <div>
        <Home />
        <Slider />
        <Myproduct/>
    </div>
  )
}

export default Landingpage
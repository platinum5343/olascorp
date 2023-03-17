import React from 'react'
import css from './Home.module.css'
import heroImg from '../../assets/heroImg.png'

const Home = () => {
  return (
    <div className={css.container}>
      <div className={css.containers}>
   <div className={css.home}>
   <h3>Find Everything you need with ease.</h3>
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque aspernatur, maxime minima repellat enim officia qui ut at esse, et temporibus impedit vitae cumque ipsa cupiditate tenetur, perferendis tempora! Nobis!</p>
   <div className={css.btn}>Shop Now</div>
   </div>
   <div className={css.img}>
    <img src={heroImg} alt="" width={600} height={500}/>
   </div>
   </div>
    </div>
   
  )
}

export default Home
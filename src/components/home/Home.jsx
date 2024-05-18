import React from 'react'
import {motion} from "framer-motion";
import About from "./About.jsx"
import Menu from "./Menu.jsx"
import emoji from "../../assets/emo_foodi.jpg";
const Home = () => {
  return (
    <>
    <section className='home'>
    <div className='sub_sec'>
        <div>
        
            <motion.h1 initial={{x:"-100%",opacity:0,}} whileInView={{x:0,opacity:1}} transition={{delay:.2}}>Khaiye Aur Kho Jaiye</motion.h1>
            <motion.p initial={{x:"-100%",opacity:0,}} whileInView={{x:0,opacity:1}} transition={{delay:.3}}>U deserve to be here</motion.p>
        </div>
        <div className='glass'>
        <img src={emoji} alt="" />
        </div>
        </div>

        <motion.a initial={{y:"-100%",opacity:0}} whileInView={{y:0,opacity:1}} href='#menu'>Items</motion.a>
        
    </section>
   <About/> 
   <Menu/>
   </>
  )
}

export default Home

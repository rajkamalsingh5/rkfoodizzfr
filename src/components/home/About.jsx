import React from 'react'
import me from "../../assets/abot.jpeg"
const About = () => {
  return (
   <section className='About'>
            <div initial={{x:"-100%", opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:.3}}>
        <img src={me} alt='Founder' height={230} width={200}/>
            
        <h4>RajKamal Singh</h4>
        <p> Hey,EveryOne this is Raj Founder of Foodizz 
            <br/>
            (Paradise for Food Lovers..)
        </p>
        </div>
        </section>
  )
}

export default About

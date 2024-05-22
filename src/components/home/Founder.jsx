import React from 'react'
import me from "../../assets/abot.jpeg"
const Founder = () => {
  return (
   <section className='founder'>
            <div initial={{x:"-100%", opacity:0}} whileinview={{x:0,opacity:1}} transition={{delay:.3}}>
        <img src={me} alt='Founder' height={230} width={200}/>
            
        <h4>RajKamal Singh</h4>
        <p>(Student of NIT-BHOPAL) The Founder of Foodizz.
            <br/>
            "Empowering the local food community"
            
        </p>
        </div>
        </section>
  )
}

export default Founder;

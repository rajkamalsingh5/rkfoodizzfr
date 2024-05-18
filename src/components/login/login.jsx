import React from 'react'
import {motion} from "framer-motion";
import {FcGoogle} from "react-icons/fc"
import { server } from '../../redux/store';
const login = () => {

  const loginHandler=()=>{
    window.open(`${server}/googlelogin`,"_self");
  };
  
  return (
    <section className='login'>
 <motion.button initial={{x:"-100%",opacity:0}} whileInView={{x:0,opacity:1}} onClick={
  loginHandler
 }>
Login with Google
<FcGoogle/>
 </motion.button>
    </section>
  )

}

export default login

import React from "react";
import { motion } from "framer-motion";
import foo_n from "../../assets/food_con.jpg"
const Contact = () => {
  return (
    <section className="contact">
      <motion.form
        initial={{
          x: "-100vw",
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{ delay: 0.2 }}
      >
        <h2>Contact Us</h2>
        <input type="text" placeholder="Enter Your Name Here.." />
        <input type="email" placeholder="abc@gmail.com" />

        <textarea placeholder="Give Your Feedback.." cols="30" rows="10"></textarea>

        <button type="submit">Submit</button>
      </motion.form>

        <motion.div className="img_con"
          initial={{
            y: "-100vh",
            x: "50%",
            opacity: 0,
          }}
          animate={{
            x: "50%",
            y: "-50%",
            opacity: 1,
          }}
          transition={{
            delay: 1,
          }}
        >
          <img src={foo_n}alt="Burger" />
        </motion.div>
    </section>
  );
};

export default Contact;
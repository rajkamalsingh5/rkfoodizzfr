import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/random.jpg";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1><span style={{color:"red"}}>W</span>ho We Are?</h1>

        <article>
          <h4>We Work For Love Not For Money.</h4>
          <p>
            We are Foodizz. Place build by food lovers for food lovers.
          </p>

          <p>
            Explore various type of food in just one click.
             Click below to see the menu
          </p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2><span style={{color:"red"}}>F</span>ounder</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              {/* <h3>RajKamal Singh</h3> */}
            </div>

            <p>
              I am Raj, Student of NIT-B.
              <br/>
              <br/>
              The founder of Foodizz- "Paradise for food Lovers"
              <br/>
              "Food is my love language"
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
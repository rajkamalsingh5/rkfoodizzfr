import React from "react";
import MenuCard from "./MenuCard";
import jalebi_ from "../../assets/jalebi.png";
import samosa_ from "../../assets/samosa.png";
import burger1 from "../../assets/burger2.png";
import roll_ from "../../assets/roll.png";
import burger2 from "../../assets/burger3.png";
import cola_ from "../../assets/cola .png"
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const Menu = () => {
  const dispatch = useDispatch();
  const addToCartHandler = (itemNum) => {
    switch (itemNum) {
      case 1:
        dispatch({ type: "samosaIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
        case 2:
        dispatch({ type: "jalebiIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
      case 3:
        dispatch({ type: "cheeseBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
      case 4:
        dispatch({ type: "colaIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
        case 5:
        dispatch({ type: "rollIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
      case 6:
        dispatch({ type: "burgerWithFriesIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
      default:
        dispatch({ type: "jalebiIncrement" });
        dispatch({ type: "calculatePrice" });
        toast.success("Added To Cart");
        break;
    }
  };

  return (
    <section id="menu">
      <h1>MENU</h1>

      <div>
        <MenuCard
          itemNum={1}
          imgSrc={samosa_}
          price={15}
          title="samosa"
          handler={addToCartHandler}
          delay={0.1}
        />
        <MenuCard
          itemNum={2}
          imgSrc={jalebi_}
          price={15}
          title="jalebi"
          delay={0.6}
          handler={addToCartHandler}
        />
        <MenuCard
          itemNum={3}
          imgSrc={burger1}
          price={50}
          title="Cheese Burger "
          delay={0.3}
          handler={addToCartHandler}
        />

        <MenuCard
          itemNum={4}
          imgSrc={cola_}
          price={45}
          title="Coca Cola"
          delay={0.4}
          handler={addToCartHandler}
        />
        
         <MenuCard
          itemNum={5}
          imgSrc={roll_}
          price={75}
          title="Veg roll"
          delay={0.7}
          handler={addToCartHandler}
        /> <MenuCard
        itemNum={6}
        imgSrc={burger2}
        price={100}
        title="Burger with Fries"
        delay={0.8}
        handler={addToCartHandler}
      /> 
      </div>
    </section>
  );
};

export default Menu;
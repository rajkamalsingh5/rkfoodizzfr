import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import jalebi_ from "../../assets/jalebi.png";
import samosa_ from "../../assets/samosa.png";
import burger1 from "../../assets/burger1.png";
import roll_ from "../../assets/roll.png";
import burger2 from "../../assets/burger2.png";
import cola_ from "../../assets/cola .png"

const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div className="first">
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>

    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {

  const {
   cartItems: {
      cheeseBurger: { quantity: cheeseBurger },
       samosa: { quantity: samosa },
      cola: { quantity: cola },
      jalebi: { quantity: jalebi },
      roll: { quantity: roll },
      burgerWithFries: { quantity: burgerWithFries },
    },
    subTotal,
    tax,
    shippingCharges,
    total,
  } = useSelector((state) => state.cart);

  const { cartItems: orderItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();



  // ==============

  const increment = (item) => {
    switch (item) {
      case 1:
        dispatch({ type: "samosaIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 2:
          dispatch({ type: "cheeseBurgerIncrement" });
          dispatch({ type: "calculatePrice" });
          break;
      case 3:
          dispatch({ type: "colaIncrement" });
          dispatch({ type: "calculatePrice" });
          break;
      case 4:
          dispatch({ type: "jalebiIncrement" });
          dispatch({ type: "calculatePrice" });
          break;
      case 5:
        dispatch({ type: "rollIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 6:
        dispatch({ type: "burgerWithFriesIncrement" });
        dispatch({ type: "calculatePrice" });
        break;

      default:
        dispatch({ type: "cheeseBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
    }

  };
// ===================================================

const decrement = (item) => {
  switch (item) {
    case 1:
      if(samosa===0) break;
      dispatch({ type: "samosaDecrement" });
      dispatch({ type: "calculatePrice" });
      break;
    case 2:
      if(cheeseBurger===0) break;
        dispatch({ type: "cheeseBurgerDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
    case 3:
      if(cola===0) break;
        dispatch({ type: "colaDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
    case 4:
      if(jalebi===0) break;
        dispatch({ type: "jalebiDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
    case 5:
      if(roll===0)break;
      dispatch({ type: "rollDecrement" });
      dispatch({ type: "calculatePrice" });
      break;
    case 6:
      if(burgerWithFries===0)break;
      dispatch({ type: "burgerWithFriesDecrement" });
      dispatch({ type: "calculatePrice" });
      break;

    default:
      dispatch({ type: "cheeseBurgerDecrement" });
      dispatch({ type: "calculatePrice" });
      break;
  }

};


// ===========================================================================


useEffect(() => {
  localStorage.setItem("cartItems", JSON.stringify(orderItems));
  localStorage.setItem(
    "cartPrices",
    JSON.stringify({
      subTotal,
      tax,
      shippingCharges,
      total,
    })
  );
}, [orderItems, subTotal, tax, shippingCharges, total]);

// ===========================================================================


  return (
    <section className="cart">
      <main>
        <CartItem
          title={"Samosa"}
          img={samosa_}
          value={samosa}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />
        <CartItem
          title={"Cheese Burger"}
          img={burger1}
          value={cheeseBurger}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        />
        <CartItem
          title={"cola"}
          img={cola_}
          value={cola}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        />
        
        <CartItem
        title={"Veg Cheese Burger"}
        img={burger2}
        value={burgerWithFries}
        increment={() => increment(2)}
        decrement={() => decrement(2)}
      />
      <CartItem
      title={"jalebi"}
      img={jalebi_}
      value={jalebi}
      increment={() => increment(2)}
      decrement={() => decrement(2)}
    />

        <CartItem
          title={"roll"}
          img={roll_}
          value={roll}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        />

        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{subTotal}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{tax}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{shippingCharges}</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p>₹{total}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
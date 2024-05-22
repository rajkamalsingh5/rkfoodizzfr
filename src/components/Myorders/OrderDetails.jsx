import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOrderDetails } from "../../redux/actions/order";

const OrderDetails = () => {
  const params = useParams();

  const { order} = useSelector((state) => state.orders);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrderDetails(params.id));
  }, [params.id, dispatch]);

  return (
    <section className="orderDetails">
        <main>
          <h1>Order Details</h1>
          <div>
            <h1>Shipping</h1>
            <p>
              <b>Address</b>
              {`${order.shippingInfo.hNo} ${order.shippingInfo.city} ${order.shippingInfo.state} ${order.shippingInfo.country} ${order.shippingInfo.pinCode}`}
            </p>
          </div>
          <div>
            <h1>Contact</h1>
            <p>
              <b>Name</b>
              {order.user.name}
            </p>
            <p>
              <b>Phone</b>
              {order.shippingInfo.phoneNo}
            </p>
          </div>

          <div>
            <h1>Status</h1>
            <p>
              <b>Order Status</b>
              {order.orderStatus}
            </p>
            <p>
              <b>Placed At</b>
              {order.createdAt.split("T")[0]}
            </p>
            <p>
              <b>Delivered At</b>
              {order.deliveredAt ? order.deliveredAt.split("T")[0] : "NA"}
            </p>
          </div>

          <div>
            <h1>Payment</h1>
            <p>
              <b>Payment Method</b>
              {order.paymentMethod}
            </p>
            <p>
              <b>Payment Reference</b>
              {order.paymentMethod === "Online"
                ? `#${order.paymentInfo}`
                : "NA"}
            </p>
            <p>
              <b>Paid At</b>
              {order.paymentMethod === "Online"
                ? order.paidAt.split("T")[0]
                : "NA"}
            </p>
          </div>

          <div>
            <h1>Amount</h1>
            <p>
              <b>Items Total</b>₹{order.itemsPrice}
            </p>
            <p>
              <b>Shipping Charges</b>₹{order.shippingCharges}
            </p>
            <p>
              <b>Tax</b>₹{order.taxPrice}
            </p>
            <p>
              <b>Total Amount</b>₹{order.totalAmount}
            </p>
          </div>

          <article>
            <h1>Ordered Items</h1>
            <div>
              <h4>Samosa </h4>
              <div>
                <span>{order.orderItems.samosa.quantity}</span> x{" "}
                <span>{order.orderItems.samosa.price}</span>
              </div>
            </div>
            <div>
            <div>
              <h4>jalebi</h4>
              <div>
                <span>{order.orderItems.jalebi.quantity}</span> x{" "}
                <span>{order.orderItems.jalebi.price}</span>
              </div>
            </div>
              <h4>Cheese Burger</h4>
              <div>
                <span>{order.orderItems.CheeseBurger.quantity}</span> x{" "}
                <span>{order.orderItems.CheeseBurger.price}</span>
              </div>
            </div>
            <div>
              <h4>cola</h4>
              <div>
                <span>{order.orderItems.cola.quantity}</span> x{" "}
                <span>{order.orderItems.cola.price}</span>
              </div>
            </div>
           
            <div>
              <h4>roll</h4>
              <div>
                <span>{order.orderItems.roll.quantity}</span> x{" "}
                <span>{order.orderItems.roll.price}</span>
              </div>
            </div>
            <div>
              <h4>burgerWithFries</h4>
              <div>
                <span>{order.orderItems.burgerWithFries.quantity}</span> x{" "}
                <span>{order.orderItems.burgerWithFries.price}</span>
              </div>
            </div>

            <div>
              <h4
                style={{
                  fontWeight: 800,
                }}
              >
                Sub Total
              </h4>
              <div
                style={{
                  fontWeight: 800,
                }}
              >
                ₹{order.itemsPrice}
              </div>
            </div>
          </article>
        </main>
     
    </section>
  );
};

export default OrderDetails;
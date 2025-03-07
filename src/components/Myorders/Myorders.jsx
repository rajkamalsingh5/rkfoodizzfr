import React from "react";
// import { Link } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyOrders } from "../../redux/actions/order";
import toast from "react-hot-toast";

const MyOrders = () => {
  const dispatch = useDispatch();

  const { orders, error } = useSelector((state) => state.orders);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    dispatch(getMyOrders());
  }, [dispatch, error]); 

  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Status</th>
              <th>Item Qty</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
          {orders &&
                orders.map((i) => (
                  <tr key={i._id}>
                  <td>#{i._id}</td>
                  <td>{i.orderStatus}</td>
                  <td>
                    {
                      // i.orderItems.samosa.quantity +
                      // i.orderItems.jalebi.quantity+
                      i.orderItems.cheeseBurger.quantity +
                      // i.orderItems.cola.quantity+
                      // i.orderItems.roll.quantity+
                      i.orderItems.burgerWithFries.quantity
                    }
                  </td>
                  <td>₹{i.totalAmount}</td>
                  <td>{i.paymentMethod}</td>
                  <td>
                {/* <Link to={`/`}> */}
                    <AiFillEye />
                  {/* </Link> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default MyOrders;
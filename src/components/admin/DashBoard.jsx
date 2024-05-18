import React from "react";
import { Link } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, ArcElement, Legend } from "chart.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAdminStats } from "../../redux/actions/admin";
ChartJS.register(Tooltip, ArcElement, Legend);


const Box = ({ title, value }) => (
  <div>
    <h3>
      {title === "Income" && "₹"}
      {value}
    </h3>
    <p>{title}</p>
  </div>
);
// ================
const DashBoard = () => {

  const dispatch = useDispatch();
  const { usersCount, ordersCount, totalIncome } = useSelector(
    (state) => state.admin
  );

  useEffect(() => {
    dispatch(getAdminStats());
  }, [dispatch]);


  const data = {
    labels: ["Preparing", "Shipped", "Delivered"],
    datasets: [
      {
        label: "# of orders",
         data: ordersCount
        ? [ordersCount.preparing, ordersCount.shipped, ordersCount.delivered]
        : [0, 0, 0],
        backgroundColor:["violet", "rgb(178,123,276)", "pink"],
        borderColor: ["white", "white", "white"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <section className="dashboard">
        <main>
          <div className="sub">
         
          <article>
            <Box title="Users" value={usersCount} />
            <Box title="Orders" value={ordersCount.total} />
            <Box title="Income" value={totalIncome} />
          </article>

          </div>

          <section>
            <div>
              <Link to="/admin/orders">View Orders</Link>
              <Link to="/admin/users">View Users</Link>
            </div>

            <aside>
              <Doughnut data={data} />
            </aside>
          </section>
        </main>
      
    </section>
  );
};

export default DashBoard;
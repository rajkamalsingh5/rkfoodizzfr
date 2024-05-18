import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Home from "./components/home/Home";
import Order from "./components/orders/orders.jsx";
import Header from "./components/layout/Header";
import Footer from "./components/layout/footer";
import Contact from "./components/contact/contact.jsx";
import Shipping from "./components/orders/shipping.jsx";
import Placed from "./components/orders/Placed.jsx";
import Success from "./components/orders/success.jsx";

// import NotFound from "./components/layout/NotFound";

import Login from "./components/login/login.jsx";
import Myorders from "./components/Myorders/Myorders.jsx";
import DashBoard from "./components/admin/DashBoard.jsx";
import Owner from "./components/profile/profile.jsx";
import Details from "./components/Myorders/OrderDetails.jsx";
import Users from "./components/admin/Users.jsx";
import Founder from "./components/founder/founder.jsx";
import Orders from "./components/admin/Orders.jsx";
import toast, { Toaster } from "react-hot-toast";
import { ProtectedRoute } from "protected-route-react";

import { loadUser } from "./redux/actions/user.js";
import "./styles/app.scss";
import "./styles/Header.scss";
import "./styles/Home.scss";
import "./styles/About.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/order.scss";
import "./styles/shipping.scss";
import "./styles/success.scss";
import "./styles/founder.scss";
import "./styles/login.scss";
import "./styles/Placed.scss";
import "./styles/DashBoard.scss";
import "./styles/profile.scss";
import "./styles/tables.scss";
import "./styles/Details.scss";



// =====================================================================================
function App() {

  const dispatch = useDispatch();
  const { error, message, isAuthenticated,user } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);


  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({
        type: "clearError",
      });
    }
    if (message) {
      toast.success(message);
      dispatch({
        type: "clearMessage",
      });
    }
  }, [dispatch, error, message]);
// ==============================================================================

  return (
   <Router>
    <Header isAuthenticated={isAuthenticated}/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/about" element={<Founder/>}/>
    <Route path="/order" element={<Order/>}/>
    <Route path="/success" element={<Success/>}/>


    <Route path="/Login" element={
       <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/me">
    <Login/>
    </ProtectedRoute>
    }
    />

<Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>

    {/* <Route path="/profile" element={<Owner/>}/> */}
    <Route path="/me" element={<Owner/>}/>

    <Route path="/shipping" element={<Shipping/>}/>

    <Route path="/myorders" element={<Myorders/>}/>

    <Route path="/order/:id" element={<Details/>}/>
    <Route path="/Placed" element={<Placed/>}/>
    </Route>




    <Route
        element={
          <ProtectedRoute
            isAuthenticated={isAuthenticated}
            adminRoute={true}
            isAdmin={user && user.role === "admin"}
            redirectAdmin="/me"
          />
        }
      >
    <Route path="/admin/dashboard" element={<DashBoard/>}/>
    <Route path="/admin/users" element={<Users/>}/>
    <Route path="/admin/orders" element={<Orders/>}/>

    </Route>
    {/* <Route path="*" element={<NotFound />} /> */}

    </Routes>
    <Footer/>
    <Toaster/>
   </Router>
  );
}

export default App;

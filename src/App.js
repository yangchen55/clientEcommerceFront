import './App.css';
import { Button } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import Dashboard from './pages/dashboard/Dashboard';
import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";
import { Helmet } from 'react-helmet';
import myLogo from './assets/b.png';
import Register from './pages/register/Register';
import { NewAccVerify } from './pages/verify/NewAccVerify';
import Login from './pages/login/Login';
import ResetPassword from './pages/reset-password/ResetPassword';
import ProfilePage from './pages/profile/ProfilePage';
import PrivateDashboard from './pages/dashboard/PrivateDashboard';
import Category from './pages/category/Category';
import ProductPage from './pages/Product/ProductPage';
import Order from './pages/orders/Order';
import Checkout from './pages/checkout/Checkout';
import History from './pages/orders/History';
import { PrivateRouter } from './components/private-router/PrivateRouter';
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

const publishableKey = process.env.REACT_APP_PK

const stripePromise = loadStripe(publishableKey)

function App() {
  return (
    <div className="App">
      <Elements stripe={stripePromise}>
        <Helmet>
          <title>Feminal Fashion</title>
          <link className="fa-3x" rel="shortcut icon" href={myLogo} type="image/png" />
        </Helmet>
        <Browser>
          <Routes>
            {/* public router */}

            <Route path="/register" element={<Register />} />
            <Route path="verify" element={<NewAccVerify />} />
            <Route path="login" element={<Login />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/category/:slug" element={<Category />} />
            <Route path="/product/:slug" element={<ProductPage />} />

            {/* private router */}

            <Route path="/account/profile" element={<ProfilePage />} />
            <Route path="/account" element={
              <PrivateRouter>
                <PrivateDashboard />
              </PrivateRouter>
            } />
            <Route path="/order/" element={<Order />} />

            <Route path="order/checkout" element={
              <PrivateRouter>
                <Checkout />
              </PrivateRouter>

            } />


            <Route
              path="order/orderHistory"
              element={
                <PrivateRouter>
                  <History />
                </PrivateRouter>
              }
            />

          </Routes>
        </Browser>
        <ToastContainer />
      </Elements>







    </div >
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/layout/Layout";
import Forgot from "./pages/auth/Forgot";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Reset from "./pages/auth/Reset";
import ChangePassword from "./pages/changePassword/ChangePassword";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import UserList from "./pages/userList/UserList";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/resetpassword/:resetToken" element={<Reset />} />
          <Route
            path="/profile"
            element={
              <Layout>
                <Profile />
              </Layout>
            }
          />
          <Route
            path="/change-password"
            element={
              <Layout>
                <ChangePassword />
              </Layout>
            }
          />
          <Route
            path="/users"
            element={
              <Layout>
                <UserList />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

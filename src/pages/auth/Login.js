import React, { useState } from "react";
import styles from "./auth.module.scss";
import { BiLogIn } from "react-icons/bi";
import Card from "../../components/card/Card";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import Loader from "../../components/loader/Loader";
import PasswordInput from "../../components/passwordInput/PasswordInput";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setformData] = useState(initialState);
  const { email, password } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const login = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("All fields are required");
    }

    // if (!validateEmail(email)) {
    //   return toast.error("Please enter a valid email");
    // }

    const userData = {
      email,
      password,
    };
    setIsLoading(true);
  };

  return (
    <div className={`container ${styles.auth}`}>
      {isLoading && <Loader />}
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <BiLogIn size={35} color="#999" />
          </div>
          <h2>Login</h2>

          <button className="--btn --btn-google --btn-block">
            <FaGoogle color="#fff" /> Login With Google
          </button>
          <br />
          <button className="--btn --btn-primary --btn-block">
            <AiFillFacebook color="#fff" /> Login With Facebook
          </button>
          <br />
          <p className="--text-center --fw-bold">Login with Email & Password</p>
          <form onSubmit={login}>
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              value={email}
              onChange={handleInputChange}
            />
            <PasswordInput
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
            {/* <input
              type="password"
              placeholder="Password"
              required
              name="password"
              value={password}
              onChange={handleInputChange}
            /> */}
            <button type="submit" className="--btn --btn-primary --btn-block">
              Login
            </button>
          </form>
          <Link to="/forgot">Forgot Password</Link>

          <span className={styles.register}>
            <Link to="/">Home</Link>
            <p> &nbsp; Don't have an account? &nbsp;</p>
            <Link to="/register">Register</Link>
          </span>
        </div>
      </Card>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import Card from "../../components/card/Card";
import PageMenu from "../../components/pageMenu/PageMenu";
import PasswordInput from "../../components/passwordInput/PasswordInput";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./ChangePassword.scss";

const initialState = {
  oldPassword: "",
  password: "",
  password2: "",
};

const ChangePassword = () => {
  const navigate = useNavigate();
  const [formData, setformData] = useState(initialState);
  const { oldPassword, password, password2 } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const changePass = async (e) => {
    e.preventDefault();

    if (password !== password2) {
      return toast.error("New passwords do not match");
    }

    const formData = {
      oldPassword,
      password,
    };

    // navigate("/profile");
  };

  return (
    <div>
      <section>
        <div className="container">
          <PageMenu />
          <h2>Change Password</h2>
          <div className="--flex-start change-password">
            <Card cardClass={"card"}>
              <form>
                <p>
                  <label>Current Password:</label>
                  <PasswordInput
                    placeholder="Current Password"
                    name="oldPassword"
                    value={oldPassword}
                    onChange={handleInputChange}
                  />
                </p>
                <p>
                  <label>New Password:</label>
                  <PasswordInput
                    placeholder="New Password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                  />
                </p>
                <p>
                  <label>New Password:</label>
                  <PasswordInput
                    placeholder="Confirm New Password"
                    name="password2"
                    value={password2}
                    onChange={handleInputChange}
                  />
                </p>

                <button className="--btn --btn-block --btn-danger">
                  Change Password
                </button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChangePassword;

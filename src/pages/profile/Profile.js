import React from "react";
import { Link, NavLink } from "react-router-dom";
import Card from "../../components/card/Card";
import "./Profile.scss";
import profileImg from "../../assets/avatarr.png";
import PageMenu from "../../components/pageMenu/PageMenu";
import Notification from "../../components/notification/Notification";

const Profile = () => {
  return (
    <>
      <Notification />
      <section>
        <div className="container">
          <PageMenu />
          <h2>Profile</h2>
          <div className="--flex-start profile">
            <Card cardClass={"card"}>
              <div className="profile-photo">
                <div>
                  <img src={profileImg} alt="profilepic" />
                  <h3>Role: {"Subscriber"}</h3>
                </div>
              </div>

              <form>
                <p>
                  <label>Change Photo:</label>
                  <input
                    type="file"
                    name="image"
                    //   onChange={handleImageChange}
                  />
                </p>
                <p>
                  <label>Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={"Akpareva Ewomazino"}
                    // onChange={handleInputChange}
                  />
                </p>
                <p>
                  <label>Email:</label>
                  <input
                    type="text"
                    name="name"
                    value={"Zino@gmail.com"}
                    // onChange={handleInputChange}
                    disabled
                  />
                </p>
                <p>
                  <label>Phone:</label>
                  <input
                    type="text"
                    name="name"
                    value={"+234701212122"}
                    // onChange={handleInputChange}
                  />
                </p>
                <p>
                  <label>Bio:</label>
                  <textarea
                    name="bio"
                    value={"Fullstack Developer"}
                    // onChange={handleInputChange}
                    cols="30"
                    rows="10"
                  ></textarea>
                </p>
                <button className="--btn --btn-block --btn-primary">
                  Update Profile
                </button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;

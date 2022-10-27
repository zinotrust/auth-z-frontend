import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import PageMenu from "../../components/pageMenu/PageMenu";
import "./UserList.scss";

const UserList = () => {
  const shortenText = (text, n) => {
    if (text.length > n) {
      const shortenedText = text.substring(0, n).concat("...");
      return shortenedText;
    }
    return text;
  };

  return (
    <section>
      <div className="container">
        <PageMenu />
        <h2>Users</h2>
        <div className="user-list">
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>s/n</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Change Role</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>{"1"}</td>
                  <td>{shortenText("Akpreava Ewomazino", 16)}</td>
                  <td>{"Zino@gmail.com"}</td>
                  <td>{"Subscriber"}</td>
                  <td>
                    {/* {"Change Role"} */}
                    <div className="sort">
                      <select
                        value={"Subscriber"}
                        //   onChange={(e) => setSort(e.target.value)}
                      >
                        <option value="latest">Subscriber</option>
                        <option value="lowest-price">Author</option>
                        <option value="highest-price">Admin</option>
                      </select>
                    </div>
                  </td>
                  <td className="icons">
                    <span>
                      <Link to={`/profile/123`}>
                        <AiOutlineEye size={25} color={"purple"} />
                      </Link>
                    </span>

                    <span>
                      <FaTrashAlt
                        size={20}
                        color={"red"}
                        // onClick={() => confirmDelete(_id)}
                      />
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserList;

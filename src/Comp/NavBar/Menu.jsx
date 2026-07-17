import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userAuth } from "../../Context/AuthContext";

const Menu = () => {
  let obj = useContext(userAuth);
  let {userData,Logout} = obj;
  console.log(obj);
  function valid() {
    return (
      <>
        <li>
          <Link to="#">{userData?.displayName}</Link>
        </li>
        <li><button onClick={Logout}>logout</button></li>
      </>
    );
  }

  function invalid() {
    return (
      <>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </>
    );
  }
  return (
    <div>
      <ul className="flex gap-25 m-6 px-10">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        {userData?.emailVerified ? valid() : invalid()}
      </ul>
    </div>
  );
};

export default Menu;

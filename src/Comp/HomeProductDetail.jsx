import React from "react";
import { Link } from "react-router-dom";
import {cart} from "../backend/cart";

const HomeProductDetail = ({ children, prod }) => {
  return (
    <div className="w-70 h-90 m-1 border rounded-2xl p-2 bg-gray-100 relative">
      <br />

      {children}

      <div className="flex justify-center gap-20 absolute bottom-5 left-25">
        <Link to={`/info/${prod}`}>
          <button className="border p-1 px-5 rounded">
            Info
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeProductDetail;
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {cart} from "../backend/cart";
import toast from "react-hot-toast";
import axios from "axios";

const Info = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  let navi = useNavigate();
  
  useEffect(() => {
    const fetching = async () => {
      try {
        const dataa = await axios.get(`http://localhost:8080/api/products/${id}`);
        setProduct(dataa.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetching();
  },[id]);

  function addToCart() {
  const existingProduct = cart.find(item => item.id === product.id);
  if (existingProduct) {
    existingProduct.quan += 1;
  } else {
    cart.push({ ...product, quan: 1 });
  }
  toast.success("Cart added");
}

  if (!product) {
    return (
      <h1 className="text-center mt-10 text-2xl">
        Loading...
      </h1>
    );
  }

  return (
    <>
      <div className="mx-auto mt-10 flex gap-10 p-5 max-w-6xl">
        <img
          src={product.image}
          alt={product.title}
          className="w-72 h-72 object-contain"
        />

        <div>
          <h1 className="text-3xl font-bold">
            {product.title}
          </h1>

          <h2 className="text-2xl mt-4">
            ${product.price}
          </h2>

          <p className="mt-5">
            {product.description}
          </p>

          <h3 className="mt-5">
            Category: {product.category}
          </h3>

          <h3 className="mt-3">
            Rating: ⭐ {product.rate}
          </h3>

          <h3>
            Reviews: {product.count}
          </h3>

          <div className="flex gap-5 mt-8">
            <button onClick={addToCart} className="border p-2 rounded bg-green-300">
              Add to Cart
            </button>

            <button onClick={()=>{addToCart();navi("/cart")}} className="border p-2 rounded bg-yellow-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
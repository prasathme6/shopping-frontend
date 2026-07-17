import React, { useState } from "react";
import { cart } from "../backend/cart";
import { _auth } from "../backend/firebase";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [items, setItems] = useState([...cart]);
  let navi = useNavigate();

  const increaseQuantity = (id) => {
    const updated = items.map((item) =>
      item.id === id ? { ...item, quan: item.quan + 1 } : item,
    );

    setItems(updated);

    const index = cart.findIndex((item) => item.id === id);
    cart[index].quan++;
  };

  const decreaseQuantity = (id) => {
    const updated = items
      .map((item) => (item.id === id ? { ...item, quan: item.quan - 1 } : item))
      .filter((item) => item.quan > 0);

    setItems(updated);

    const index = cart.findIndex((item) => item.id === id);

    if (cart[index].quan > 1) {
      cart[index].quan--;
    } else {
      cart.splice(index, 1);
    }
  };

  const total = items.reduce((sum, item) => sum + item.price * item.quan, 0);

  async function OrderPlaced() {
    const order = {
      customerName: _auth.currentUser?.displayName,

      customerEmail: _auth.currentUser?.email,

      totalAmount: total,

      items: items.map((item) => ({
        productId: item.id,
        customerName: _auth.currentUser?.displayName,
        title: item.title,
        price: item.price,
        quantity: item.quan,
        image: item.image,
      })),
    };

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/orders`, order);

      toast.success(res.data);

      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
    navi("/")
  }

  // console.log(_auth.currentUser?.displayName)-------------------------------------------------------------------------------
  return (
    <div className="p-8 min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center">Shopping Cart</h1>

      {items.length === 0 ? (
        <div className="text-center text-2xl font-semibold mt-20">
          Your Cart is Empty
        </div>
      ) : (
        <>
          <div className="space-y-5">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md p-5 flex justify-between items-center"
              >
                <div className="flex gap-6 items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-28 h-28 object-contain"
                  />

                  <div>
                    <h2 className="font-bold text-lg">{item.title}</h2>

                    <p className="text-xl text-green-600 mt-2">${item.price}</p>

                    <p className="text-gray-500">Quantity : {item.quan}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className=" px-4 py-2 rounded"
                  >
                    -
                  </button>

                  <span className="text-xl font-bold">{item.quan}</span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="px-4 py-2 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-white shadow-lg rounded-xl p-6 w-80 ml-auto">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

            <div className="flex justify-between text-lg">
              <span>Total</span>
              <span className="font-bold">${total.toFixed(2)}</span>
            </div>

            <button
              onClick={OrderPlaced}
              className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-lg font-semibold"
            >
              Place order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

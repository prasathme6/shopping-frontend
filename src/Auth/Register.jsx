import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { _auth } from "../backend/firebase";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  // const [eye, setEye] = useState(false); 
  // function handle() {
  //   setEye(!eye);
  // }
  let navi = useNavigate();
  let obj = {
    name : "",
    mail: "",
    pwd: "",
    cpwd: "",
  };
  const [data, setData] = useState(obj);
  let { name, mail, pwd, cpwd } = data;

  async function handleData(e) {
    e.preventDefault();

    if (pwd !== cpwd) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const firebaseUser = await createUserWithEmailAndPassword(
        _auth,
        mail,
        pwd,
      );

      console.log(firebaseUser);

      await sendEmailVerification(firebaseUser.user);

      toast.success("Email verification sent successfully!");

      await updateProfile(firebaseUser.user, {
        displayName: name,
        photoURL:
          "...",
      });

      navi("/login");
    } catch (err) {
      toast.error(err.message.slice(10));
      setData(obj);
    }
  }
  return (
    <>
      <div className="bg-gray-100 w-[100vw] h-[90vh]">
        <form
          onSubmit={handleData}
          className="border flex flex-col w-120 h-112 p-10 relative top-30 left-120 bg-white"
        >
          <h2 className="text-center font-bold text-xl">Register</h2> <br />
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            id=""
            className="border w-100 "
            value={data.name}
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
          />
          <br />
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="mail"
            id=""
            className="border w-100 "
            value={data.mail}
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
          />
          <br />
          <label htmlFor="">Password</label>
          <input
            type="password"
            value={data.pwd}
            name="pwd"
            id=""
            className="border w-100 "
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
          />{" "}
          <br />
          <label htmlFor="">Confirm Password</label>
          <input
            type="password"
            name="cpwd"
            id=""
            value={data.cpwd}
            className="border w-100 "
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
          />{" "}
          <br />
          <button className="border w-100 relative top-3 p-2 bg-[#039477] text-white">
            register
          </button>
          <p className="my-8 mx-20">
            Already have an account?{" "}
            <span className="text-[#039477]">Login</span>
          </p>
        </form>
      </div>
      {/* <div className="relative left-40 top-[-20px]" onClick={handle}>
        {eye ? <FaEye /> : <FaEyeSlash />}
      </div> */}
    </>
  );
};

export default Register;

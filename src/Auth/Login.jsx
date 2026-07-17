import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { _auth } from "../backend/firebase";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  let navi = useNavigate();
  let obj = {
    mail: "",
    pwd: "",
  };
  const [data, setData] = useState(obj);
  let {mail, pwd} = data;
  async function handleData(e) {
    e.preventDefault();
    setData({ mail: e.target.mail.value, pwd: e.target.pwd.value });
    try{
      let userData = await signInWithEmailAndPassword(_auth,mail,pwd);
      if(userData.user.emailVerified) {
        toast.success("Logged in successfully...")
        navi("/")
        window.location.assign("")
      }
    }
    catch(err){
      toast.error(err.message.slice(10));
      setData(obj);
    }
  }
  return (
    <>
      <div className="bg-gray-100 w-[100vw] h-[90vh]">
        <form
          onSubmit={handleData}
          className="border flex flex-col w-120 h-90 p-10 relative top-30 left-120 bg-white"
        >
          <h2 className="text-center font-bold text-xl">Login</h2> <br />
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="mail"
            id=""
            value={data.mail}
            className="border w-100"
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
          />
          <br />
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="pwd"
            value={data.pwd}
            id=""
            className="border w-100 "
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
          />{" "}
          <br />
          <button className="border w-100 relative top-3 p-2 bg-[#039477] text-white">
            login
          </button>
          <p className="my-8 mx-20">
            Don't have an account?{" "}
            <span className="text-[#039477]">Sign up</span>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import About from "../Comp/About";
import Home from "../Comp/Home";
import Info from "../Comp/Info";
import Cart from "../Comp/Cart";

export let map = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/info/:id",
        element: <Info/>,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
      {
        path:"*",
        element: <h1>Not found</h1>
      }
    ],
  },
]);

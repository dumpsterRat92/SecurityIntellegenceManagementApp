import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//stylings
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

//page imports
import App from "./App.jsx";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Profile from "./pages/Profile";
import Support from "./pages/Support";
import Database from "./pages/Database";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "account",
        element: <Account />,
      },
      {
        path: "database",
        element: <Database />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "profile/:id",
        element: <Profile />,
      },
      {
        path: "support",
        element: <Support />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

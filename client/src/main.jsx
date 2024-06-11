// Import necessary modules and components
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// Import pages and components
import App from "./App.jsx";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Profile from "./pages/Profile";
import Support from "./pages/Support";
import Database from "./pages/Database";
import ProfileDetailed from "./components/Database/ProfileDetailed.jsx";

// Create a router with routes configuration
const router = createBrowserRouter([
  {
    path: "/", // Root path
    element: <App />, // Main app component
    errorElement: <Error />, // Error component for unmatched routes
    children: [
      {
        index: true, // Default child route
        element: <Home />, // Home page component
      },
      {
        path: "account", // /account path
        element: <Account />, // Account page component
      },
      {
        path: "database", // /database path
        element: <Database />, // Database page component
      },
      {
        path: "faq", // /faq path
        element: <FAQ />, // FAQ page component
      },
      {
        path: "login", // /login path
        element: <Login />, // Login page component
      },
      {
        path: "profile", // /profile path
        element: <Profile />, // Profile page component
        children: [
          {
            path: ":profileId", // /profile/:profileId path
            element: <ProfileDetailed />, // ProfileDetailed component for specific profile
          },
        ],
      },
      {
        path: "support", // /support path
        element: <Support />, // Support page component
      },
    ],
  },
]);

// Render the router provider with the created router
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

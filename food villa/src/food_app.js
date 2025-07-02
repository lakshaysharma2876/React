import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestaurantInfo from "./components/RestaurantInfo";
import AdminProfile from "./components/AdminProfile";
import UserProfile from "./components/UserProfile";
import Instamart from "./components/Instamart";
import { useState } from "react";
import userContext from "./utils/userContext";
import store from "./utils/store";
import { Provider } from "react-redux";

const FinalLayout = () => {
  const [info] = useState({
    name: "Lakshay Sharma",
    email: "lakshay2876@gmail.com",
  });

  return (
    <>
      <Provider store={store}>
        <Header />
        <Outlet />
        <userContext.Provider
          value={{
            user: info,
          }}
        >
          <Footer />
        </userContext.Provider>
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <FinalLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Body />,
      },
      {
        path: "/about",
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <About />,
          },
          {
            path: "user",
            element: <UserProfile />,
          },
          {
            path: "admin",
            element: (
              <AdminProfile name="Lakshay" email="lakshay2876@gmail.com" />
            ),
          },
        ],
      },
      {
        path: "/home",
        element: <Body />,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/instamart",
        element: <Instamart />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantInfo />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

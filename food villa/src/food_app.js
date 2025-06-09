import {createBrowserRouter, RouterProvider,} from "react-router";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Cart from "./components/Cart";
import Error from "./components/Error";

const FinalLayout = () => {
    return (
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
    );
}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <FinalLayout />,
        errorElement : <Error />
    },
    {
        path : "/about",
        element : <About />
    },
    {
        path : "/home",
        element : <FinalLayout />
    },
    {
        path : "/ContactUs",
        element : <ContactUs />
    },
    {
        path : "/Cart",
        element : <Cart />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
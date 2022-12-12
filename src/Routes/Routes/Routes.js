import { createBrowserRouter } from "react-router-dom";
import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";
import Home from "../../pages/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/about',
        element: <About></About>
    },
    {
        path: '/contact',
        element: <Contact></Contact>
    }
])

export default router;
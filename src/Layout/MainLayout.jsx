import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const MainLayout = () => {
    const location = useLocation();
    console.log(location);
    const isLoginPage = location.pathname.includes('login');
    return (
        <div>
            {isLoginPage || <Navbar></Navbar>}
            <Outlet></Outlet>
            {isLoginPage || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;
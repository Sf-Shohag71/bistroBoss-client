import { NavLink, Outlet } from "react-router-dom";
import { AiFillHome,AiFillCalendar,AiFillWallet,AiFillBook, AiOutlineMenu, AiFillShopping } from "react-icons/ai";
import { FaShoppingCart,FaFlickr } from "react-icons/fa";
import useCart from "../../Hooks/useCart";

const Deshboard = () => {
  const [cart] = useCart();
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open Menubar
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content">
          <li>
            <NavLink to="/deshboard/home" className="uppercase"><AiFillHome className="text-2xl"></AiFillHome> User Home</NavLink>
          </li>
          <li>
            <NavLink to="/deshboard/reservations" className="uppercase"><AiFillCalendar className="text-2xl"></AiFillCalendar> Reservations</NavLink>
          </li>
          <li>
            <NavLink to="/deshboard/history" className="uppercase"><AiFillWallet className="text-2xl"></AiFillWallet> Payment History</NavLink>
          </li>
          <li>
            <NavLink to="/deshboard/mycart" className="uppercase"><FaShoppingCart className="text-2xl"></FaShoppingCart>
             My Cart <div className="badge badge-secondary">{cart?.length || 0}</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/deshboard/review" className="uppercase"><FaFlickr className="text-2xl"></FaFlickr> Add Review</NavLink>
          </li>
          <li>
            <NavLink to="/deshboard/booking" className="uppercase"><AiFillBook className="text-2xl"></AiFillBook> My Booking</NavLink>
          </li>
          <div className="divider divider-white"></div>
          <li>
            <NavLink to="/" className="uppercase"><AiFillHome className="text-2xl"></AiFillHome> Home</NavLink>
          </li>
          <li>
            <NavLink to="/deshboard/menu" className="uppercase"><AiOutlineMenu className="text-2xl"></AiOutlineMenu> Food Menu</NavLink>
          </li>
          <li>
            <NavLink to="/deshboard/contact" className="uppercase"><AiFillShopping className="text-2xl"></AiFillShopping> Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Deshboard;

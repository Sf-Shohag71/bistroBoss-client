import { Link } from "react-router-dom";

const GlobalBtn = ({btnText, link}) => {
    return (
        <Link to={link}>
            <button className="hover:bg-warning uppercase cursor-pointer rounded-lg border-b-4 border-warning px-4 py-2 mt-20 text-center flex mx-auto bg-gray-100">{btnText}</button>
        </Link>
    );
};

export default GlobalBtn;
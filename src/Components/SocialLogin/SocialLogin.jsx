import { useContext } from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSignInWithGoogle = () => {
    signInWithGoogle().then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      const saveUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
      };
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
          navigate(from, { replace: true });
        });
    });
  };
  return (
    <div className="flex mx-auto space-x-6">
      <div>
        <FaFacebook className="text-3xl hover:text-[#D1A054] cursor-pointer"></FaFacebook>
      </div>
      <div>
        <button onClick={handleSignInWithGoogle}>
          <AiFillGoogleCircle className="text-[32px] hover:text-[#D1A054] cursor-pointer"></AiFillGoogleCircle>
        </button>
      </div>
      <div>
        <FaGithub className="text-3xl hover:text-[#D1A054] cursor-pointer"></FaGithub>
      </div>
    </div>
  );
};

export default SocialLogin;

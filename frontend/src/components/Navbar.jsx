import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";
import { useLogoutMutation } from "../slices/usersApiSlice";
import {logout} from "../slices/authSlice"
import {useSelector,useDispatch} from 'react-redux';



const Navbar = () => {

  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logoutApiCall]=useLogoutMutation();

  const logoutHandler= async ()=>{
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="navbar  bg-base-300">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Secret Factory</a>
      </div>
      <div className="navbar-end">
        <Link to={"/add-secret"} className="btn mx-2">
          Manage Secret
        </Link>
        <button onClick={logoutHandler} className="btn">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar
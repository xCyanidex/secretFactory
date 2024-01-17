import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="navbar  bg-base-300">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Secret Factory</a>
      </div>
      <div className="navbar-end">
        <Link to={'/add-secret'} className="btn mx-2">Add a secret</Link>
        <button className="btn">Logout</button>
      </div>
    </div>
  );
}

export default Navbar
import { signOut } from "firebase/auth";
import { NavLink } from "react-router-dom";
import auth from "../firebase";

const NavBar = () => {

    const menu = <>
        <li><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
        >
            Home
        </NavLink></li>
        <li>        <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
        >
            Login
        </NavLink></li>
        <li>
            <NavLink
                to="/registration"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Registration
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/cart"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Cart
            </NavLink>
        </li>
    </>

    const handleLogOut = ()=> {
        signOut(auth)
        .then(()=>{
            console.log("logged out");
        })
        .catch(error=>{
            console.log(error.message);
        })
    }

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Mitu</a>
                </div>
                <div className="navbar-center hidden md:flex gap-5">
                    <ul className="menu menu-horizontal px-1">
                        {menu}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a onClick={handleLogOut} className="btn">Logout</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
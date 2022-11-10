import { Link, NavLink } from "react-router-dom";
import './header.css';

const Header = ()=>{
    return(
        <nav className="navbar navbar-expand-lg bg-light p-3">
            <div className="container-fluid">
                <Link className="navbar-brand" to="#"></Link>
                
                <div className="collapse navbar-collapse">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink className={(active)=> active.isActive ? "nav-link active" : "nav-link"} aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className={(active)=> active.isActive ? "nav-link active" : "nav-link"} to="/products">Products</NavLink>
                    </li>
                    
                </ul>
                <ul className="d-flex">
                    <li>
                        <span className="badge bg-secondary">0</span>
                        <i className="bi bi-cart3"></i>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;
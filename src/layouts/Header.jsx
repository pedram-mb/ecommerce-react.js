import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import './header.css';

const Header = ()=>{

    const {cart} = useSelector((state => state.ShopingCart))

    return(
        <nav className="navbar navbar-expand-lg bg-light p-3">
            <div className="container-fluid">
                <Link className="navbar-brand" to="#">shoping</Link>
                
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
                        <span className="badge bg-secondary">{cart.length}</span>
                        <NavLink to="/shoping">
                            <span className={(active)=> active.isActive ? "active" : ""}>
                                <i className="bi bi-cart3"></i>
                            </span>
                        </NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;
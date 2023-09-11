import { Link, NavLink } from 'react-router-dom';
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand fs-3"> La Tienda</Link>

                <ul className="navbar-nav mx-auto fs-5">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link " aria-current="page" >Inicio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/category/Ultraliviano" className="nav-link" >Ultra Livianos</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/category/Monomotor" className="nav-link">Monomotores </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/category/Bimotor" className="nav-link">Bimotores</NavLink>
                    </li>
                </ul>

                <Link to="/cart"><CartWidget /></Link>
            </div>
        </nav>
    )
}

export default NavBar
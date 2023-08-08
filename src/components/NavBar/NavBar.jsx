import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand fs-3" href="#"> La Tienda</a>

                <ul className="navbar-nav mx-auto fs-5">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Segunda cat</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Tercera cat</a>
                    </li>
                </ul>

                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar
const CartWidget = () => {
    return (
        <div>
            <button className="btn btn-outline-secondary position-relative">
                <i className="bi bi-cart3"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info text-dark">
                    4
                    <span className="visually-hidden">productos en el carrito</span>
                </span>
            </button>
        </div>
    )
}

export default CartWidget
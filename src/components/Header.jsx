import { Outlet, Link } from "react-router-dom";

function Header() {
    return (
        <>
            <header>
                <nav>
                <div className="navbar bg-base-300 shadow-md">
                    <div className="flex-1">
                        <Link className="btn btn-ghost text-xl" to="/">Mercadinho BigBom</Link>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link to="/products">Produtos</Link>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>
            </header>
            <Outlet />
        </>
    )
}

export default Header;
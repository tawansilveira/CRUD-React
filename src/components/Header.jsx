import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header>
                <nav>
                <div className="navbar bg-base-300 shadow-md">
                    <div className="flex-1">
                        <Link className="btn btn-ghost text-2xl" to="/">Mercadinho Big Bom</Link>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link to="/products" className="text-lg focus:bg-none">Produtos</Link>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;
import { Link } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import { useAppState } from "../hooks/AppStateContext";

const ProductCard = ({product}) => {
    const { deleteProduct } = useProducts()
    const { handleEdit } = useAppState()

    return (
        <div className="card bg-base-100 w-80 shadow-xl">
            <figure>
                <img
                src={product.imageUrl}
                alt={product.name} />
            </figure>
            <div className="card-body p-3">
                <p className="text-gray-500">R$ {product.price}</p>
                <h2 className="card-title">{product.name}</h2>
                <div className="card-actions justify-center">
                    <div className="join">
                        <button
                        className="btn join-item"
                        onClick={() => {deleteProduct(product.id)}}
                        >
                            Deletar
                        </button>
                        <Link to={`/products/${product.id}`} className="details-link">
                            <button className="btn join-item">Visualizar</button>
                        </Link>
                        <button
                            className="btn join-item"
                            onClick={() => {handleEdit(product)}}
                        >
                            <label
                                htmlFor="my-drawer-4"
                                className="btn join-item drawer-button focus:outline-none"
                            >
                                Editar
                            </label>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;
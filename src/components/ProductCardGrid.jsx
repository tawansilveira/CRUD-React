import ProductCard from "./ProductCard";
import { useAppState } from "../hooks/AppStateContext";

const ProductCardGrid = () => {
    const { products } = useAppState()
    return (
        <article className='container my-5'>
            <div className="grid grid-flow-col grid-cols-4 xl:grid-cols-2 lg:grid-cols-2 mx-5">
                {products.map((product, index) => (
                    <ProductCard key={index} product={product}/>
                ))}
            </div>
        </article>
    )
}

export default ProductCardGrid;
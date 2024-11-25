import ProductCard from "./ProductCard";

const ProductCardGrid = ({products, handleEdit}) => {
    return (
        <article className='container my-5'>
            <div className="grid grid-flow-col grid-cols-5 xl:grid-cols-3 lg:grid-cols-2 mx-5">
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} handleEdit={handleEdit} />
                ))}
            </div>
        </article>
    )
}

export default ProductCardGrid;
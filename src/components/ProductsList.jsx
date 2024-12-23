import ProductsDrawerButton from "./ProductsDrawerButton";
import ProductCardGrid from "./ProductCardGrid";

const ProductsList = () => {
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-5 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between relative">
                <h1 className="text-4xl font-bold absolute left-1/2 -translate-x-1/2 text-center">Lista de Produtos</h1>
                <div className="ml-auto">
                    <ProductsDrawerButton/>
                </div>
            </div>
            <ProductCardGrid/>
        </div>
    );
};

export default ProductsList;

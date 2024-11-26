import ProductForm from "../components/ProductForm";
import ProductsList from "../components/ProductsList";
import { useAppState } from "../hooks/AppStateContext";

const ProductsDrawerList = () => {
  const { handleCancelEdit } = useAppState()

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <ProductsList/>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay" onClick={() => handleCancelEdit()}></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-128 p-4">
          <ProductForm/>
        </ul>
      </div>
    </div>
  );
};

export default ProductsDrawerList;


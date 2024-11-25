import ProductForm from "../components/ProductForm";
import ProductsList from "../components/ProductsList";
import { useProducts } from "../hooks/useProducts";
import { useState } from "react";
import { useAppState } from "../hooks/AppStateContext";

const ProductsDrawerList = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);
  //const { products } = useProducts();
  const { products } = useAppState()

  console.log(isEditing)
  const handleCancelEdit = () => {
      setIsEditing(false);
      setProductToEdit(null);
  };

  const handleEdit = (product) => {
    setProductToEdit(product);
    setIsEditing(true);
};

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <ProductsList
          products={products}
          handleEdit={handleEdit}
        />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay" onClick={handleCancelEdit}></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-128 p-4">
          <ProductForm
            onSubmit={() => {
                setIsEditing(false);
                setProductToEdit(null);
            }}
            initialData={productToEdit || {}}
            isEditing={isEditing}
            cancelEdit={handleCancelEdit}
          />
        </ul>
      </div>
    </div>
  );
};

export default ProductsDrawerList;


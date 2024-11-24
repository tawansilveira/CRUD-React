import ProductForm from "../components/ProductForm";
import ProductsList from "../components/ProductsList";

const ProductsDrawerList = () => {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <ProductsList/>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-128 p-4">
          <ProductForm/>

          {/* <ProductForm
            onSubmit={(product) => {
                if (isEditing && productToEdit) {
                console.log("Atualizando produto", product);
                } else {
                console.log("Adicionando produto", product);
                }
                setIsEditing(false);
                setProductToEdit(null);
            }}
            initialData={productToEdit || {}}
            isEditing={isEditing}
            cancelEdit={handleCancelEdit}
            /> */}
        </ul>
      </div>
    </div>
  );
};

export default ProductsDrawerList;


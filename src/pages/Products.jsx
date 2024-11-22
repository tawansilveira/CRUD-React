import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import ProductForm from "../components/ProductForm"; 

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isEditing, setIsEditing] = useState(false); 
  const [productToEdit, setProductToEdit] = useState(null); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(db, "products");
        const productsSnapshot = await getDocs(productsCollection);
        const productsList = productsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsList);
      } catch (error) {
        console.error("Erro ao buscar produtos: ", error);
      }
    };

    fetchProducts();
  }, []);

  const handleEdit = (product) => {
    setProductToEdit(product);
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setProductToEdit(null);
  };

  const handleDelete = async (productId) => {
    try {
      const productDoc = doc(db, "products", productId);
      await deleteDoc(productDoc); 
      setProducts(products.filter((product) => product.id !== productId)); 
    } catch (error) {
      console.error("Erro ao excluir o produto: ", error);
    }
  };

  return (
    <div>
      <h1>Lista de Produtos</h1>

      <ProductForm
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
      />

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              {product.imageUrl ? (
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  width="200"
                  height="200"
                  style={{ objectFit: "cover" }}
                />
              ) : (
                <p>Imagem não disponível</p>
              )}
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>Preço: R${product.price.toFixed(2)}</p>
              <Link to={`/products/${product.id}`} className="details-link">
                Ver Detalhes
              </Link>
              <button onClick={() => handleEdit(product)}>Editar</button>
              <button onClick={() => handleDelete(product.id)}>Excluir</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;


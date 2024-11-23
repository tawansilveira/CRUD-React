import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productDoc = await getDoc(doc(db, "products", id));
        if (productDoc.exists()) {
          setProduct(productDoc.data());
        } else {
          console.error("Produto não encontrado!");
        }
      } catch (error) {
        console.error("Erro ao buscar produto: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (!product) {
    return <p>Produto não encontrado.</p>;
  }

  const isValidImageUrl = (url) => {
    return url && (url.startsWith("http://") || url.startsWith("https://"));
  };

  return (
    <div>
      <h1>Detalhes do Produto</h1>
      <p><strong>Nome:</strong> {product.name}</p>
      <p><strong>Preço:</strong> R${product.price.toFixed(2)}</p>
      <p><strong>Descrição:</strong> {product.description}</p>

      {isValidImageUrl(product.imageUrl) ? (
        <div>
          <strong>Imagem:</strong>
          <img src={product.imageUrl} alt={product.name} width="200" />
        </div>
      ) : (
        <p><strong>Imagem não disponível.</strong></p>
      )}
    </div>
  );
};

export default ProductDetails;


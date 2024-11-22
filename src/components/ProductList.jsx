import { Link } from "react-router-dom";

const ProductList = ({ products, onDelete, onEdit }) => {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link to={`/products/${product.id}`}>
            <strong>{product.name}</strong>
          </Link> - R${product.price.toFixed(2)}
          <div>
            <button onClick={() => onEdit(product)}>Editar</button>
            <button onClick={() => onDelete(product.id)}>Excluir</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;

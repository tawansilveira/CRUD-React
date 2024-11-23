import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
        <h1>Gestão de Produtos</h1>
      <main>
        <p>Bem-vindo ao sistema de gestão de produtos!</p>
        <p>Gerencie seus produtos com facilidade.</p>
        <Link to="/products">
          <button>Ir para Produtos</button>
        </Link>
      </main>
    </div>
  );
};

export default Home;

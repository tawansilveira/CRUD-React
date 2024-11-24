import { Link } from "react-router-dom";

const Home = () => {
  return (
<section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-2 gap-4 md:grid-cols-2 md:items-center md:gap-8">
      <div className="shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1601598505513-7489a6272d2a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="rounded aspect-square h-144 w-full"
          alt=""
        />
      </div>

      <div className="flex items-center">
        <div className="max-w-lg md:max-w-none align-middle">
          <h2 className="text-5xl font-semibold sm:text-3xl">
            Gestão de Produtos
          </h2>

          <p className="mt-4 text-xl text-gray-400">
            Bem-vindo ao sistema de gestão de produtos!
          </p>
          <p className="text-gray-400 text-xl">
            Gerencie seus produtos com facilidade.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Home;

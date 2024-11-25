import { useState, useEffect } from "react";
import { useProducts } from "../hooks/useProducts";

const ProductForm = ({ onSubmit, initialData = {}, isEditing }) => {
  const {addProduct, updateProduct} = useProducts()
  const [id, setId] = useState(initialData.id || "");
  const [name, setName] = useState(initialData.name || "");
  const [price, setPrice] = useState(initialData.price || "");
  const [description, setDescription] = useState(initialData.description || "");
  const [imageUrl, setImageUrl] = useState(initialData.imageUrl || "");


  // TODO - Está impedindo o cadastro
  // useEffect(() => {
  //   setName(initialData.name || "");
  //   setPrice(initialData.price || "");
  //   setDescription(initialData.description || "");
  //   setImageUrl(initialData.imageUrl || "");
  // }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // TODO - Na primeira clicada do botão de submit, diz que os dados estão vazios, mas na segunda vez vai.
    setName(formData.get('name'));
    setPrice(parseFloat(formData.get('price')));
    setDescription(formData.get('description'));
    setImageUrl(formData.get('imageUrl'));
    if (!name || !price || !description || !imageUrl) {
      alert("Todos os campos são obrigatórios!");
      return;
    }
    onSubmit();

    if (isEditing) {
      updateProduct(
        id,
        product
      )
    } else {
      addProduct(product)
    }
    setName("");
    setPrice("");
    setDescription("");
    setImageUrl("");
    e.target.reset();
  };

  return (
        <div>
            <h1 className="text-2xl font-black tracking-tight text-center mb-5">
              {isEditing ? "Atualizar produto" : "Cadastro de Produto"}
            </h1>
            <div className="mt-8">
                <form onSubmit={handleSubmit} className="form-control gap-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Nome do produto"
                        required
                        className="p-2 rounded"
                    />
                    <input
                        type="number"
                        name="price"
                        step="any"
                        placeholder="Preço do produto"
                        required
                        className="p-2 rounded"
                    />
                    <textarea
                    type="text"
                    placeholder="Descrição"
                    name="description"
                    rows={6}
                    required
                    className="p-2 rounded"
                    />
                    <input
                        type="text"
                        placeholder="URL da imagem"
                        name="imageUrl"
                        required
                        className="p-2 rounded"
                    />
                    <div className="flex justify-center">
                      {
                        isEditing
                        ?
                        <button
                          type="submit"
                          className="btn bg-base-300 hover:btn-neutral w-fit"
                          >
                            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay">
                              Atualizar Produto
                            </label>
                        </button>
                        :
                        <button type="submit" className="btn bg-base-300 hover:btn-neutral w-fit">
                          Cadastrar Produto
                        </button>
                      }
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductForm;


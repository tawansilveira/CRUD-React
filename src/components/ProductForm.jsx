import { useState, useEffect } from "react";

const ProductForm = ({ onSubmit, initialData = {}, isEditing, cancelEdit }) => {
  const [name, setName] = useState(initialData.name || "");
  const [price, setPrice] = useState(initialData.price || "");
  const [description, setDescription] = useState(initialData.description || "");
  const [imageUrl, setImageUrl] = useState(initialData.imageUrl || "");

  useEffect(() => {
    setName(initialData.name || "");
    setPrice(initialData.price || "");
    setDescription(initialData.description || "");
    setImageUrl(initialData.imageUrl || "");
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price || !description || !imageUrl) {
      alert("Todos os campos são obrigatórios!");
      return;
    }
    onSubmit({
      name,
      price: parseFloat(price),
      description,
      imageUrl,
    });
    setName("");
    setPrice("");
    setDescription("");
    setImageUrl("");
  };

  return (
    // <div>
    //   <form onSubmit={handleSubmit}>
    //     <input
    //       type="text"
    //       placeholder="Nome do Produto"
    //       value={name}
    //       onChange={(e) => setName(e.target.value)}
    //     />
    //     <input
    //       type="number"
    //       placeholder="Preço"
    //       value={price}
    //       onChange={(e) => setPrice(e.target.value)}
    //     />
    //     <textarea
    //       placeholder="Descrição"
    //       value={description}
    //       onChange={(e) => setDescription(e.target.value)}
    //     ></textarea>
    //     <input
    //       type="text"
    //       placeholder="URL da Imagem"
    //       value={imageUrl}
    //       onChange={(e) => setImageUrl(e.target.value)}
    //     />
    //     <button type="submit">{isEditing ? "Atualizar Produto" : "Adicionar Produto"}</button>
    //     {isEditing && <button onClick={cancelEdit}>Cancelar Edição</button>}
    //   </form>
    // </div>

        <div>
            <h1 className="text-2xl font-black tracking-tight text-center mb-5">Cadastro de Produto</h1>
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
                        placeholder="Preço do produto"
                        required
                        className="p-2 rounded"
                    />
                    <textarea
                    type="text"
                    placeholder="Descrição"
                    name="description"
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
                        <button type="submit" className="btn bg-base-300 hover:btn-neutral w-fit">Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductForm;


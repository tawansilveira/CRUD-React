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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome do Produto"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Preço"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <textarea
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <input
        type="text"
        placeholder="URL da Imagem"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <button type="submit">{isEditing ? "Atualizar Produto" : "Adicionar Produto"}</button>
      {isEditing && <button onClick={cancelEdit}>Cancelar Edição</button>}
    </form>
  );
};

export default ProductForm;


import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";

export const useProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productList);
    } catch (error) {
      console.error("Erro ao buscar produtos: ", error);
    }
  };

  const addProduct = async (product) => {
    try {
      await addDoc(collection(db, "products"), product);
      fetchProducts();
    } catch (error) {
      console.error("Erro ao adicionar produto: ", error);
    }
  };

  const updateProduct = async (id, updatedProduct) => {
    try {
      await updateDoc(doc(db, "products", id), updatedProduct);
      fetchProducts();
    } catch (error) {
      console.error("Erro ao atualizar produto: ", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await deleteDoc(doc(db, "products", id));
      fetchProducts();
    } catch (error) {
      console.error("Erro ao deletar produto: ", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, addProduct, updateProduct, deleteProduct };
};

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
import { useAppState } from "./AppStateContext";

export const useProducts = () => {
    // const [products, setProducts] = useState([]);
    const {products, setProducts} = useAppState()

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

    // const handleCancelEdit = () => {
    //     setIsEditing(false);
    //     setProductToEdit(null);
    // };

    // const handleEdit = (product) => {
    //     setProductToEdit(product);
    //     setIsEditing(true);
    // };


    useEffect(() => {
        fetchProducts();
    }, []);

    return { products, fetchProducts, addProduct, updateProduct, deleteProduct };
};

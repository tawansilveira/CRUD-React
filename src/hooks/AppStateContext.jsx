import React, { createContext, useContext, useState } from "react";

const AppStateContext = createContext();

export const AppStateProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [productToEdit, setProductToEdit] = useState({});

    const handleCancelEdit = () => {
        setIsEditing(false);
        setProductToEdit({});
    };

    const handleEdit = (product) => {
        setProductToEdit(product);
        setIsEditing(true);
    };

    return (
        <AppStateContext.Provider value={{
            products, setProducts,
            isEditing, setIsEditing,
            productToEdit, setProductToEdit,
            handleEdit, handleCancelEdit
        }}>
            {children}
        </AppStateContext.Provider>
    );
};

// Custom Hook to use the context
export const useAppState = () => useContext(AppStateContext);

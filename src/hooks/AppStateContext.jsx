import React, { createContext, useContext, useState } from "react";

const AppStateContext = createContext();

export const AppStateProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    // const [isEditing, setIsEditing] = useState(false);
    // const [productToEdit, setProductToEdit] = useState(null);

    return (
        <AppStateContext.Provider value={{
            products, setProducts
            // isEditing, setIsEditing,
            // productToEdit, setProductToEdit
        }}>
            {children}
        </AppStateContext.Provider>
    );
};

// Custom Hook to use the context
export const useAppState = () => useContext(AppStateContext);

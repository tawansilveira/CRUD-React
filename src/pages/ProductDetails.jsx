import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productDoc = await getDoc(doc(db, "products", id));
                if (productDoc.exists()) {
                    setProduct(productDoc.data());
                } else {
                    console.error("Produto não encontrado!");
                }
            } catch (error) {
                console.error("Erro ao buscar produto: ", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    if (loading) {
        return (
            <>
                <div className="flex place-content-center">
                    <div className="grow">
                        <span className="loading loading-spinner loading-lg"></span>
                    </div>
                </div>
            </>
        )
    }

    if (!product) {
        return <p>Produto não encontrado.</p>;
    }

    const isValidImageUrl = (url) => {
        return url && (url.startsWith("http://") || url.startsWith("https://"));
    };

    return (
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid row-s grid-cols-2 gap-8 md:grid-cols-2 md:items-center md:gap-8">
                <div className="flex justify-end items-center">
                    <div className="w-96">
                        {
                            isValidImageUrl(product.imageUrl) ? (
                                <img
                                src={product.imageUrl}
                                alt={product.name}
                                className="rounded shadow-md"/>
                            ) : (
                                <p><strong>Imagem não disponível.</strong></p>
                            )
                        }
                    </div>
                </div>
                <div className="flex items-center">
                <div className="max-w-lg md:max-w-none align-middle grow">
                <div className="flow-root">
                    <dl className="-my-3 divide-y divide-gray-100 text-sm dark:divide-gray-700">
                        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900 dark:text-white">Nome do produto</dt>
                        <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">{product.name}</dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900 dark:text-white">Preço</dt>
                        <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">R$ {product.price}</dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900 dark:text-white">Descrição</dt>
                        <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">{product.description}</dd>
                        </div>
                    </dl>
                    </div>

                </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;


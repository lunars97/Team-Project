import React, { useContext, useEffect } from "react";
import { productContext } from "../../contexts/ProductContext/ProductContext";
import ProductCard from "./../ProductCard/ProductCard";
import "./../ProductList/ProductList.css";

const ProductList = () => {
    const { getCards, productsData } = useContext(productContext);

    useEffect(() => {
        getCards();
    }, []);
    return (
        <div>
            <div className="card-list">
                {productsData.map((item) => (
                    <ProductCard item={item} id={item.id} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;

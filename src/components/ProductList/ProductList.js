import React, { useContext, useEffect } from "react";
import { productContext } from "../../contexts/ProductContext/ProductContext";
import ProductCard from "./../ProductCard/ProductCard";
import "./../ProductList/ProductList.css";

const ProductList = () => {
    const { getCards, productsData, allPages, setPage } = useContext(
        productContext
    );

    const arr = [];
    for (let i = 1; i <= allPages; i++) {
        arr.push(i);
    }

    useEffect(() => {
        getCards();
    }, []);
    return (
        <div>
            <div className="card-list">
                {productsData.map((item) => (
                    <ProductCard key={item.id} item={item} id={item.id} />
                ))}
            </div>
            <div className="pagination">
                {arr.map((page) => (
                    <button className="pageBtn" onClick={() => setPage(page)}>
                        {page}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
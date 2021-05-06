import React, { useContext, useEffect } from "react";
import { productContext } from "../../contexts/ProductContext/ProductContext";
import ProductCard from "../ProductCard/ProductCard";
import "./../ProductList/ProductList.css";

const ProductList = ({ history }) => {
    const { getCards, productsData, allPages, setPage } = useContext(
        productContext
    );

    const arr = [];
    for (let i = 1; i <= allPages; i++) {
        arr.push(i);
    }

    useEffect(() => {
        getCards(history);
    }, []);
    return (
        <div className="main_container">
            <div className="cards_container">
                {productsData.map((item) => (
                    <ProductCard key={item.id} item={item} id={item.id} />
                ))}

                <div className="pagination">
                    {arr.map((page) => (
                        <button
                            className="pageBtn"
                            onClick={() => setPage(page)}
                        >
                            {page}
                        </button>
                    ))}
                </div>
            </div>

            <div className="cont_reklam_block">
                <div className="advertising_container"></div>
                <div className="advertising_second"></div>
            </div>
        </div>
    );
};

export default ProductList;

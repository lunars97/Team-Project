import React from "react";
import { Link } from "react-router-dom";
import "./../ProductCard/ProductCard.css";

const ProductCard = (props) => {
    return (
        <Link>
            <div className="card">
                <section>
                    <img className="card-img" src={props.item.img} />
                    <br></br>
                    <span className="card-brand">{props.item.brand}</span>
                </section>
            </div>
        </Link>
    );
};
export default ProductCard;

import { CircularProgress } from '@material-ui/core';
import React, {useContext, useEffect} from 'react';
import { productContext } from '../../contexts/ProductContext/ProductContext';
import { calcTotalPrice } from '../../Helpers/calcPrice';
import './Basket.css';
import { Link } from "react-router-dom";
import DetailsIcon from '@material-ui/icons/Details';



const Basket = (props) => {
    const {getCart, basket, deleteFromCart, changeProductCount} = useContext(productContext)

    useEffect(() => {
        getCart()
    }, [])
    console.log(basket)
    return (
        <div className="basket">
            {basket.products ? (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Брэнд</th>
                            <th>Модель</th>
                            <th>Состояние</th>
                            <th>Год выпуска</th>
                            <th>Details</th>
                            <th>Удаление</th>
                        </tr>
                    </thead>
                    <tbody>
                        {basket.products.map(elem => (
                            <tr key={elem.item.id}>
                                <td>
                                    <img style={{width: "50px"}} src={elem.item.img} alt="product-img" />
                                </td>
                                <td>{elem.item.brand}</td>
                                <td>{elem.item.model}</td>
                                <td>{elem.item.condition}</td>
                                <td>{elem.item.dateOfRelease}</td>
                                <td>
                                    <Link to={`/details/${elem.item.id}`}>
                                        <div><DetailsIcon/></div>
                                    </Link>
                                </td>
                                <td>
                                    <button onClick ={ () => deleteFromCart (elem.item.id) } >&times;</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div> 
            ) : (
                <CircularProgress />
            )}
        </div>
    );
};

export default Basket;
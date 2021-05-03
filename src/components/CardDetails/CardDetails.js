import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../../contexts/ProductContext/ProductContext";
import "./../CardDetails/CardDetails.css";
<<<<<<< HEAD
import Header from '../Header/Header';
import { Link } from "react-router-dom";
import axios from "axios";

async function deleteCar(id) {
     axios.delete(`http://localhost:8000/cars/${id}`);
   
}



=======
const CardDetails = (props) => {
    const { getCardDetails, cardDetails } = useContext(productContext);

    // const [editStatus, setEditStatus] = useState(false);
    // const [editedCard, setEditedCard] = useState();

    // const handleValue = (e) => {
    //     let newCard = {
    //         ...editedCard,
    //         [e.target.name]: e.target.value,
    //     };
    //     setEditedCard(newCard);
    // };
    // const handleSave = () => {
    //     saveCard(props.match.params.id, editedCard);
    //     setEditedCard(false);
    // };
>>>>>>> 4fd32bae44f0b69e58427cf79d143e7d8e37b665

const CardDetails = (props) => {
    const { getCardDetails, cardDetails } = useContext(productContext);

    


<<<<<<< HEAD
=======
    // const handleSave = () => {
    //     getCardDetails(props.match.params.id, editedCard);
    //     setModal(true);
    // };
>>>>>>> 4fd32bae44f0b69e58427cf79d143e7d8e37b665

    useEffect(() => {
        getCardDetails(props.match.params.id);
    }, [props.match.params.id]);
    
    console.log(props);
    return (
        <div>
            {cardDetails ? (
<<<<<<< HEAD
<>
    <Header/>
<div className="main_container_car">
<div className="carinfo-container">
    <div className="sell_name">
        <div className="sell_name_left">В продаже: {cardDetails.brand} {cardDetails.model} {cardDetails.engine} {cardDetails.dateOfRelease} год</div> 
        <div className="sell_som_dollar_block">
            <div className="sell_dollar">$ {cardDetails.price}</div>
            <div className="sell_som">{cardDetails.priceSom} сом</div>
        </div>
       
    </div>

    <div className="carinfo_left">
        <div>Характеристики</div>
       

        <div className="field-row">
            <div className="left-item item">Год выпуска</div> <div className="right-item item">{cardDetails.dateOfRelease}</div>
        </div>

        <div className="field-row">
            <div className="left-item item">Пробег</div> <div className="right-item item">{cardDetails.km} км</div>
        </div>

        <div className="field-row">
            <div className="left-item item">Кузов</div> <div className="right-item item">{cardDetails.bodyWork}</div>
        </div>


        <div className="field-row">
            <div className="left-item item">Цвет</div> <div className="right-item item">{cardDetails.color}</div>
        </div>

        <div className="field-row">
            <div className="left-item item">Двигатель</div> <div className="right-item item">{cardDetails.engine}</div>
        </div>

        <div className="field-row">
            <div className="left-item item">Коробка</div> <div className="right-item item">{cardDetails.gearBox}</div>
        </div>

        <div className="field-row">
            <div className="left-item item">Привод</div> <div className="right-item item">{cardDetails.drive}</div>
        </div>

        <div className="field-row">
            <div className="left-item item">Руль</div> <div className="right-item item">{cardDetails.wheel}</div>
        </div>

        <div className="field-row">
            <div className="left-item item">Состояние</div> <div className="right-item item">{cardDetails.condition}</div>
        </div>

        <div className="field-row">
            <div className="left-item item">Наличие</div> <div className="right-item item">{cardDetails.isAvailable}</div>
        </div>
        <br/>
       <Link to="/"> <button onClick={() =>deleteCar(cardDetails.id)}>Delete</button></Link> 
       
        
    </div>
    <div className="car_image_block">
    <div className="car_image_card"> <img src={cardDetails.img} /></div>
    <div className="car_description"><h3>Описание:</h3><br/>
        <div>{cardDetails.description}</div>
    </div>
    </div>
</div>
</div>

</>
      
=======
                <div className="main-wrapper">
                    <img
                        className="details-img"
                        src={cardDetails.img}
                        alt="car"
                    />
                    <p className="detailed-info">{cardDetails.brand}</p>
                    <p className="detailed-info">{cardDetails.dateOfRelease}</p>
                    <p className="detailed-info">{cardDetails.engine}</p>
                    <p className="detailed-info">{cardDetails.gearBox}</p>
                    <p className="detailed-info">{cardDetails.condition}</p>
                    <p className="detailed-info">{cardDetails.price}</p>
                    <span style={{ backgroundColor: cardDetails.color }}></span>
                    <p className="detailed-info">{cardDetails.description}</p>
                </div>
>>>>>>> 4fd32bae44f0b69e58427cf79d143e7d8e37b665
            ) : (
                "Details"
            )}
        </div>
    );
};

export default CardDetails;

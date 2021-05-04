import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../../contexts/ProductContext/ProductContext";
import "./../CardDetails/CardDetails.css";


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

const CardDetails = (props) => {
    const { getCardDetails, cardDetails } = useContext(productContext);

    


    // const handleSave = () => {
    //     getCardDetails(props.match.params.id, editedCard);
    //     setModal(true);
    // };

    useEffect(() => {
        getCardDetails(props.match.params.id);
    }, [props.match.params.id]);
    
    // console.log(props);
    return (
        <div>
            {cardDetails ? (
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
            ) : (
                "Details"
            )}
        </div>
    );
};

export default CardDetails;

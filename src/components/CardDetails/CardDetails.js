import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../../contexts/ProductContext/ProductContext";
import "./../CardDetails/CardDetails.css";
const CardDetails = (props) => {
    const { getCardDetails, cardDetails } = useContext(productContext);

    const [editedCard, setEditedCard] = useState();

    const handleValue = (e) => {
        let newCard = {
            ...editedCard,
            [e.target.name]: e.target.value,
        };
    };

    // const addComment = (comment) => {
    //     let {data: {comments}} = axios('url' + id)

    //     comments.push(comment)

    //     axios.patch('url' + id, comments)
    // }

    // const handleSave = () => {
    //     getCardDetails(props.match.params.id, editedCard);
    //     setModal(true);
    // };

    useEffect(() => {
        getCardDetails(props.match.params.id);
    }, [props.match.params.id]);
    console.log(props);
    return (
        // <div>
        //     <div className="dropdown" style={{ float: "right" }}>
        //         <button className="dropbtn">Settings</button>
        //         <div className="dropdown-content">
        //             <a href="#">Delete</a>
        //             <a href="#">Edit</a>
        //         </div>
        //     </div>
        //     <div className="main-modal">
        //         <div className="inner-modal">
        //             <button className="close-btn">✖️</button>
        //             <div className="close">
        //                 <input
        //                     onChange={handleValue}
        //                     // value={}
        //                     name="img"
        //                     type="text"
        //                     placeholder="Изображение"
        //                     className="inpModal"
        //                 />
        //                 <input
        //                     onChange={handleValue}
        //                     name="brand"
        //                     type="text"
        //                     className="inpModal"
        //                     placeholder="Марка"
        //                 />
        //                 <input
        //                     onChange={handleValue}
        //                     name="dateOfRelease"
        //                     type="text"
        //                     className="inpModal"
        //                     placeholder="Год выпуска"
        //                 />
        //                 <input
        //                     onChange={handleValue}
        //                     name="engine"
        //                     type="text"
        //                     className="inpModal"
        //                     placeholder="Двигатель"
        //                 />
        //                 <input
        //                     onChange={handleValue}
        //                     name="gearBox"
        //                     type="text"
        //                     className="inpModal"
        //                     placeholder="Коробка"
        //                 />
        //                 <input
        //                     onChange={handleValue}
        //                     name="condition"
        //                     type="text"
        //                     className="inpModal"
        //                     placeholder="Состояние"
        //                 />
        //                 <input
        //                     onChange={handleValue}
        //                     name="price"
        //                     type="text"
        //                     className="inpModal"
        //                     placeholder="Цена"
        //                 />
        //                 <input
        //                     onChange={handleValue}
        //                     name="description"
        //                     type="text"
        //                     className="inpModal"
        //                     placeholder="Описание"
        //                 />
        //                 <br></br>
        //                 <button className="edit-btn" onClick={handleSave}>
        //                     Save
        //                 </button>
        //             </div>
        //         </div>
        // </div>
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
                    <p className="detailed-info">{cardDetails.description}</p>
                </div>
            ) : (
                "Details"
            )}
        </div>
    );
};

export default CardDetails;

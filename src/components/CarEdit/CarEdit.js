import { productContext } from "../../contexts/ProductContext/ProductContext";
import React, { useContext, useEffect, useState } from "react";
import Header from "../Header/Header";

const CarEdit = (props) => {

    const { getCardEdit, cardEdit } = useContext(productContext);

    useEffect(() => {
        getCardEdit(props.match.params.id);
      
    }, [props.match.params.id]);


    return (
        <div>
            {cardEdit ?             
                (<>
            <Header/>
            <div className="main_container_car">
<div className="carinfo-container">
    <div className="sell_name">
        <div className="sell_name_left">В продаже: <input className="edit-inputs top-inps" value={cardEdit.brand}/> <input className="edit-inputs top-inps" value={cardEdit.model}/> <input className="edit-inputs top-inps" value={cardEdit.engine}/> <input className="edit-inputs top-inps" value={cardEdit.dateOfRelease}/> год</div> 
        <div className="sell_som_dollar_block">
            <div className="sell_dollar">$ <input className="edit-inputs" value={cardEdit.price}/> </div>
            <div className="sell_som">Сом <input className="edit-inputs" value={cardEdit.priceSom}/></div>
        </div>
       
    </div>

    <div className="carinfo_left">
        <div>Характеристики</div>
       

        <div className="field-row">
            <div className="left-item item">Год выпуска</div> <div className="right-item item"><input className="edit-inputs" value={cardEdit.dateOfRelease}/></div>
        </div>

        <div className="field-row">
            <div className="left-item item">Пробег</div> <div className="right-item item"><input className="edit-inputs" value={cardEdit.km}/></div>
        </div>

        <div className="field-row">
            <div className="left-item item">Кузов</div> <div className="right-item item"><input className="edit-inputs" value={cardEdit.bodyWork}/> </div>
        </div>


        <div className="field-row">
            <div className="left-item item">Цвет</div> <div className="right-item item"><input className="edit-inputs" value={cardEdit.color}/> </div>
        </div>

        <div className="field-row">
            <div className="left-item item">Двигатель</div> <div className="right-item item"><input className="edit-inputs" value={cardEdit.engine}/> </div>
        </div>

        <div className="field-row">
            <div className="left-item item">Коробка</div> <div className="right-item item"><input className="edit-inputs" value={cardEdit.gearBox}/> </div>
        </div>

        <div className="field-row">
            <div className="left-item item">Привод</div> <div className="right-item item"><input className="edit-inputs" value={cardEdit.drive}/> </div>
        </div>

        <div className="field-row">
            <div className="left-item item">Руль</div> <div className="right-item item"><input className="edit-inputs" value={cardEdit.wheel}/> </div>
        </div>

        <div className="field-row">
            <div className="left-item item">Состояние</div> <div className="right-item item"><input className="edit-inputs" value={cardEdit.condition}/> </div>
        </div>

        <div className="field-row">
            <div className="left-item item">Наличие</div> <div className="right-item item"><input className="edit-inputs" value={cardEdit.isAvailable}/> </div>
        </div>
        <button onClick={() => window.history.back()}>Назад</button>
      
   
       
       
        
    </div>
    <div className="car_image_block">
    <div className="car_image_card"> <img src={cardEdit.img}/><input className="edit-inputs" value={cardEdit.img}/> ссылка к картинке </div>
    <div className="edit_carDescription"><h3>Описание:</h3><br/>
        <div><input className="edit-inputs edit-description" value={cardEdit.description}/> </div>
    </div>
    </div>
</div>
</div>
            
            
            
            
            
            
                 </>) 
            
            : ("Car Edit")}
            
        </div>
    );
};

export default CarEdit;
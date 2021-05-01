import React from 'react';
import './CarInfo.css';


const CarInfo = () => {
    return (
        <div className="main_container_car">
            <div className="carinfo-container">
                <div className="sell_name">
                    <div className="sell_name_left">В продаже Honda Accord Euro R 2.0 2006 год</div> 
                    <div className="sell_som_dollar_block">
                        <div className="sell_dollar">$ 8300</div>
                        <div className="sell_som">600 000 сом</div>
                    </div>
                   
                </div>
           
                <div className="carinfo_left">
                    <div>Характеристики</div>
                   

                    <div className="field-row">
                        <div className="left-item item">Год выпуска</div> <div className="right-item item">2003</div>
                    </div>

                    <div className="field-row">
                        <div className="left-item item">Пробег</div> <div className="right-item item">130 000</div>
                    </div>

                    <div className="field-row">
                        <div className="left-item item">Кузов</div> <div className="right-item item">Седан</div>
                    </div>


                    <div className="field-row">
                        <div className="left-item item">Цвет</div> <div className="right-item item">Белый</div>
                    </div>

                    <div className="field-row">
                        <div className="left-item item">Двигатель</div> <div className="right-item item">2.0</div>
                    </div>

                    <div className="field-row">
                        <div className="left-item item">Коробка</div> <div className="right-item item">Механика</div>
                    </div>

                    <div className="field-row">
                        <div className="left-item item">Привод</div> <div className="right-item item">Передний</div>
                    </div>

                    <div className="field-row">
                        <div className="left-item item">Руль</div> <div className="right-item item">Справа</div>
                    </div>

                    <div className="field-row">
                        <div className="left-item item">Состояние</div> <div className="right-item item">Идеальное</div>
                    </div>

                    <div className="field-row">
                        <div className="left-item item">Наличие</div> <div className="right-item item">В наличии</div>
                    </div>
                    
                    
                </div>
                <div className="car_image_block">
                <div className="car_image_card"></div>
                <div className="car_description"><h3>Описание:</h3><br/>
                    <div>Текст описания</div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default CarInfo;
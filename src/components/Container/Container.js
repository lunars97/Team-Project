import React from 'react';
import { Link } from 'react-router-dom';
import './Container.css';

const Container = () => {

  
    return (
        <>
        <div className="main_container">
           
            <div className="cards_container">
          
            <Link to="/">
            
                <div className="car_card">
                <img  className="card_image" src="https://im.mashina.kg/tachka/images//0/4/4/044dc81710c369c4e25302b2243f58a6_240x180.jpg"/>
                <div className="car_name">Toyota Mark 2</div>    
                <p className="price">
                    <div className="views_icon"><div className="coll">115</div></div>
                    <div className="money1 money">$ 4 850</div>                   
                    <div className="money2 money">411 280 сом </div>
                    
                </p>
                <div className="info_wrapper">

                    <div className="year_miles">
                        <span>2002г </span>
                        <span>, 2.0л </span>
                        <span> автомат</span>
                        <i className="color-icon"  title="черный"></i>
                    </div>
                    <div className="body_type">
                        <span>универсал  </span>
                        <span>, бензин </span>
                        
                    </div>
                    <div className="volume">
                        <span>руль справа  </span>
                        <span>, 240 000 км </span>

                    </div>

                    <div className="card_icons">
                        <img src="https://www.mashina.kg/bundles/client/default/img/product-vip-listing.svg"/>

                    </div>
                    <div className="city_name">
                        бишкек  
                        <span className="inner-time">11 мин</span>
                       

                    </div>
                </div>
                </div>   

                
                 
            </Link>
       

            
            </div>
        </div>
        </>
    );
};

export default Container;
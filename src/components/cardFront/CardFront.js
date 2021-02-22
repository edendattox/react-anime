import React from 'react'
import "./CardFront.css"

function CardFront({title, img}) {
    return (
      <div className="cardFront">
        <div className="cardFront__img"> 
         <img
           src={img}
            alt="hl"
           height="280px"
           width="190px"
         />
        </div>
      
       <div className="cardFront__title">
          <h4>{title}</h4>
          </div>
      </div>

  );
   }
export default CardFront;
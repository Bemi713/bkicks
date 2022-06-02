import React from 'react'
import { Link } from 'react-router-dom';


function KickCard({ name, desc, price, img, sold }) {

    return (
        <>
        {/* <Navbar /> */}
        <section className="kick-card">
            <div  class="kickscard">
              <img class="" src={img} alt={name} />
              
                     <div class="con">
                      <p> {name} </p>
                     <p> {desc}</p>
                      <p> {price}</p>
                      {/* <p> Sold: {!sold} </p>  */}                      
                      <Link to={`/checkout`}><button button class="button-85"> Buy </button></Link> 
                    </div>
            </div>
           
        </section>
        </>
      );
    }
    
    export default KickCard;
 

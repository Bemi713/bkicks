import React, { useState } from "react";
import {Link} from 'react-router-dom'
import KickCard from "./KickCard";

function unique(value, index, self) {
  return self.indexOf(value) === index;
}

function KicksList({ kicks }) {
    const [cart, setCart] = useState([]);

    const addToCart =async  (kick) => {
      const existingCartKicks = JSON.parse(localStorage.getItem('cart')) || [];
      let allCartKicks = [...cart, ...existingCartKicks, kick];
      allCartKicks = allCartKicks.filter(unique);

      setCart(allCartKicks);

      localStorage.setItem('cart', JSON.stringify(allCartKicks));
    }

    const renderKicks = kicks.map((kick)=> (
      <KickCard key={kick.id} 
      id={kick.id} 
      name={kick.name}
      img={kick.img} 
      price={kick.price} 
      desc={kick.desc} 
      sold={kick.sold}
      addToCart={() => addToCart(kick)}
      />
      ));
    return (
   

      <div className='kicks'>
    <Link to={`/checkout`}><button button class="button-85"> Checkout Now  </button></Link> 

      {renderKicks}


      </div>
   
 );  
  
        }
    

        
    


export default KicksList
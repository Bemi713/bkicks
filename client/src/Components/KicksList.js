import React from "react";
import KickCard from "./KickCard";


function KicksList({ kicks }) {
    const renderKicks = kicks.map((kick)=>(
      <KickCard key={kick.id} id={kick.id} name={kick.name} img={kick.img} price={kick.price} desc={kick.desc} sold={kick.sold} />
      ));
    return (
      <ul className='kicks'>
      {renderKicks}
      </ul>
    
 );
        }

        
    


export default KicksList
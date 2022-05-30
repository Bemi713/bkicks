import React from 'react'
// import { Link } from 'react-router-dom';


function KickCard({ key, name, desc, price, img, sold }) {
    return (
        <>
        {/* <Navbar /> */}
        <section className="menu-card">
            <div key={key} class="">
              <img class="" src={img} alt={name} />
              <h2 class="">{name}</h2>
                    <div class="con">
                      <p>Desc: {desc}</p>
                      <p>Price: {price}</p>
                      <p> Sold: {sold} </p>
                      {/* <Link to={`/concerts/${id}`}><button class="button-85">See More</button></Link><br></br>
                      <Link to={`/comments`}><button button class="button-85">Comment</button></Link> */}
                    </div>
            </div>
           
        </section>
        </>
      );
    }
    
    export default KickCard;
 
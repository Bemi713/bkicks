import React from 'react'
// import { Link } from 'react-router-dom';


function KickCard({ name, desc, price, img, sold }) {
    
    return (
        <>
        {/* <Navbar /> */}
        <section className="kick-card">
            <div  class="">
              <img class="" src={img} alt={name} />
              
                    <div class="con">
                     <p>Name: {name} </p>
                     <h1 style={{backgroundColor: "lightblue"}}>Image: {img}</h1>
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
 
    
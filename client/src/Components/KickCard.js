import React, { useState } from 'react';

function KickCard({ name, desc, price, img, sold, addToCart }) {
  const [isInStock, setIsInStock] = useState(true);

  function handleToggleStock() {
    setIsInStock((isInStock) => !isInStock);
  }

  return (
    <section className="kick-card">
      <div class="kickscard">
        <img class="" src={img} alt={name} width={400} />

        <div class="con">
          <h4> {name} </h4>
          <p> {desc}</p>
          <p> ${price}</p>
          {sold && <p> Sold!</p> }
          {isInStock ? (
            <button className="primary" onClick={handleToggleStock}>
              In Stock
            </button>
          ) : (
            <button onClick={handleToggleStock}>Out of Stock</button>
          )}
          {!sold && <button onClick={() => addToCart()} class="button-85"> Add to Cart </button>}
        </div>
      </div>
    </section>
  );
}

export default KickCard;
import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import KickCard from "./KickCard";



const Cart = () => {
  const [price, setPrice] = useState(0);
  const [cart, setCart] = useState([]);

  const handleRemove = (id) => {
    const kicks = cart.filter((kick) => kick.id !== id);
    setCart(kicks);

    localStorage.setItem('cart', JSON.stringify(kicks));
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((kick) => (ans += kick.price));
    setPrice(ans);
  };

  useEffect(async () => {
   const kicks = await JSON.parse(localStorage.getItem('cart'));
   setCart(kicks);
  }, []);

  useEffect(() => {
    handlePrice();
  }, [cart]);

  return (
    <section>
        <Link to={`/checkout`}><button button class="button-85"> Checkout Now  </button></Link>

      {cart.map((kick) => (
        <div className="cart_box" key={kick.id}>
          <div className="cart_img">
            <img src={kick.img} alt="" width={400} />
            <p>{kick.name}</p>
          </div>
          <div>
            <button>${kick.price}</button>
          </div>
          <div>
            <span>{kick.price}</span>
            <button onClick={() => handleRemove(kick.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart </span>
        <span>${price}</span>
      </div>
      
      
    </section>


  );
};

export default Cart;
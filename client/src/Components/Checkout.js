import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function Checkout() {
    const [streetname, setStreetname] = useState("");
    const [streetnumber, setStreetnumber] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const handlePrice = () => {
        let ans = 0;
        cart.map((kick) => (ans += kick.price));
        setTotalPrice(ans);
      };
    
      useEffect(async () => {
       const kicks = await JSON.parse(localStorage.getItem('cart'));
       setCart(kicks);
      }, []);
    
      useEffect(() => {
        handlePrice();
      }, [cart]);

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/orders/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                streetnumber: streetnumber,
                streetname: streetname,
                city: city,
                state: state,
                zip_code: zipcode,
                total_price: totalPrice,
            }),
        })
            .then((r) => r.json())
            
    }

    return (
        <div class="checkoutform">
            <h1> Checkout Form</h1>
            <h2>Get ready something is on the way!</h2>
            <form onSubmit={handleSubmit}>
                <label>Enter your streetnumber: </label>
                <input
                    type="text"
                    name="streetnumber"
                    value={streetnumber}
                    onChange={(e) => setStreetnumber(e.target.value)}
                />

                <label>Enter your streetname: </label>
                <input
                    type="text"
                    name="streetname"
                    value={streetname}
                    onChange={(e) => setStreetname(e.target.value)}
                />

                <label>Enter your city: </label>
                <input
                    type="text"
                    name="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />

                <label>Enter your state: </label>
                <input
                    type="text"
                    name="state"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                />

                <label>Enter your zipcode: </label>
                <input
                    type="number"
                    name="zipcode"
                    value={zipcode}
                    onChange={(e) => setZipcode(e.target.value)}
                />
                <button type='submit'>Submit</button>
                <Link to={`/kicks`}><button button class="button-85"> Add More Items </button></Link> 
                
            </form>
        </div>
    )
}


export default Checkout
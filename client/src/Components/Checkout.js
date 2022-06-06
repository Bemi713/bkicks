import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom';

function Checkout() {
    const [streetname, setStreetname] = useState("");
    const [streetnumber, setStreetnumber] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [country, setCountry] = useState("");
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [redirect, setRedirect] = useState(false);

    const handlePrice = () => {
        if (!cart.length) return;

        let ans = 0;
        cart.map((kick) => (ans += Number(kick.price)));
        setTotalPrice(ans);
    };

    useEffect(() => {
        async function getLocCart() {
            const locKicks = localStorage.getItem('cart') || '[]';
            const kicks = await JSON.parse(locKicks);

            if (kicks.length === 0) setRedirect(true);
            setCart(kicks);
        }
        getLocCart();
    }, []);

    useEffect(() => {
        handlePrice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cart]);

    const markSold = async () => {
        try {
            const items_ids = cart.map((i) => i.id);
            await fetch("/items/sold", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    items_ids,
                }),
            })
        } catch (error) {
            console.log('Error: ', error);
        }
    }

    const storeOrder = async () => {
        try {
            await fetch("/orders/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    country,
                    streetnumber,
                    streetname,
                    city,
                    state,
                    zip_code: zipcode,
                    total_price: totalPrice,
                }),
            });
        } catch (error) {
            console.log('Error: ', error);
        }
    }

    const submitForm = async (e) => {
        e.preventDefault();

        try {
            await storeOrder();
            await markSold();
            localStorage.removeItem('cart');
            alert('Checkout succesful!')
        } catch (error) {
            console.log('Error: ', error);
        }
    }

    return (
        <div class="checkoutform">
            { redirect && <Redirect to='/kicks'/> }
            <h1> Checkout Form</h1>
            <h2>Get ready something is on the way!</h2>
            <form onSubmit={submitForm}>
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

                <label>Enter your Country: </label>
                <input
                    type="text"
                    name="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                />

                <button type='submit'>Submit</button>
                <Link to={`/kicks`}><button button class="button-85"> Add More Items </button></Link>

            </form>
        </div>
    )
}


export default Checkout
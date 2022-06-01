// import React, { useState } from 'react'
// import ReactDOM from "react-dom/client";



// function Checkout() {
  

//   const [inputs, setInputs] = useState({});

//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setInputs(values => ({...values, [name]: value}))
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(inputs);
//   }

//   function handleSubmit(e){
//     e.preventDefault();
//     fetch("http://localhost:3001/orders", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         house_number: house_number,
//         street: street,
//         city: city,
//         state: state,
//         category_id: category_id,
//       }),
//      })
//       .then((r) => r.json())
//       .then((newKick) => onAddKick(newKick));
  
//     }




//   return (
//     <div class="checkoutform">
//     <h1> Checkout Form</h1>
//     <h2>Get ready something is on the way!</h2>
    
    
    
//     <form onSubmit={handleSubmit}>
//       <label>Enter your name:
//       <input 
//         type="text" 
//         name="fullname" 
//         value={inputs.fullname || ""} 
//         onChange={handleChange}
//       />
//       </label>

//       <label>Enter your streetaddress:
//         <input 
//           type="number" 
//           name="streetaddress" 
//           value={inputs.age || ""} 
//           onChange={handleChange}
//         />
//         </label>

//         <label>Enter your streetname:
//         <input 
//           type="text" 
//           name="streetname" 
//           value={inputs.streetname || ""} 
//           onChange={handleChange}
//         />
//         </label>

//         <label>Enter your city:
//         <input 
//           type="text" 
//           name="city" 
//           value={inputs.city || ""} 
//           onChange={handleChange}
//         />
//         </label>

//         <label>Enter your state:
//         <input 
//           type="text" 
//           name="state" 
//           value={inputs.state || ""} 
//           onChange={handleChange}
//         />
//         </label>

//         <label>Enter your zipcode:
//         <input 
//           type="number" 
//           name="zipcode" 
//           value={inputs.zipcode || ""} 
//           onChange={handleChange}
//         />
//         </label>

//         </form>
// </div>
//   )
// }
           
        
// export default Checkout
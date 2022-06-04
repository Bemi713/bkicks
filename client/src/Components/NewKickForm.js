import React, { useState} from 'react'

function NewKickForm({ onAddKick}) {
  const [name, setName] =useState("");
  const [image, setImage] =useState("");
  const [desc, setDesc] =useState("");
  const [price, setPrice] =useState("");
  const [category_id, setCategory_Id] =useState(1);

function handleSubmit(e){
  e.preventDefault();
  fetch("/items", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      img: image,
      desc: desc,
      price: price,
      category_id: category_id,
    }),
   })
    .then((r) => r.json())
    .then((newKick) => onAddKick(newKick));

  }
  function deleteItem(e){
    console.log("Button element", e)
    e.parentElement.remove()
  }

  return (
  <div class="newkickform">
      <h1>New Kicks Form</h1>
      <h2>If you are ready to sell 'em! We are ready to put some 💵 in your 🏦!</h2>
  
    <form onSubmit={handleSubmit}>

    {/* <input type="text" name="category_id" placeholder="Category Id" value={category_id} 
      onChange={(e) => setCategory_Id(e.target.value)}/> */}

      <input type="text" name="name" placeholder="Shoe Name" value={name} 
      onChange={(e) => setName(e.target.value)}/>

      <input type="text" name="image" placeholder="Shoe Image" value={image} 
      onChange={(e) => setImage(e.target.value)}/>

      <input type="text" name="description" placeholder="Shoe Description" value={desc} 
      onChange={(e) => setDesc(e.target.value)}/>

      <input type="number" name="price" step="0.01" placeholder=" Shoe Price" value={price} 
      onChange={(e) => setPrice(parseFloat(e.target.value))}/>
      
      <button type="submit"> Add Kicks </button>

      {/* <button onclick="deleteItem(this)">Delete</button> */}

    </form>
    
  </div>
  );
}

export default NewKickForm;
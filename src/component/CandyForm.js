import React, { useState } from "react";
const CandyForm=()=>{
    const [name,setName]=useState("");
    const [description,setDescription]=useState("");
    const [price,setPrice]=useState(0);
    const [allEntry,setAllEntry]=useState([]);
    const submitForm=(e)=>{
        e.preventDefault();
        const newEntry={name:name,description:description,price:price}
        setAllEntry([...allEntry,newEntry]);
    }
    return(
        <React.Fragment>
<form action="" onSubmit={submitForm}>
    <labal>Candy Name: </labal>
    <input type='Text' id='candyname' value={name} onChange={(e)=>setName(e.target.value)}></input>
    <labal>Candy Description: </labal>
    <input type='Text' id='descrip'
    value={description} onChange={(e)=>setDescription(e.target.value)}></input>

    <labal>Price: </labal>
    <input type='Number' id='candyprice'
    value={price} onChange={(e)=>setPrice(e.target.value)}></input>
<button type='submit'>Add</button>
</form>
<div>
    {
        allEntry.map((curelm)=>{
            return <li>
             Name:  {curelm.name}
              Description: {curelm.description}
              Price :{curelm.price}
               <button>Buy 1</button>
               <button>Buy 2</button>
               <button>Buy 3</button>
            </li>
        })
    }
</div>
        </React.Fragment>
    )
}
export default CandyForm;
import React, {useState} from 'react'

const Bsform = () =>{

    const [name, setName]=useState('');
    const [address, setAddress]=useState('');

    const onclickHandlier = (e)=>{
        e.preventDefault()
        if (name==='' || address==''){
            console.log("please fill out the fields")
        }
    }

    const nameHandlier = (e)=>{
        setName(e.target.value)
    }

    const addressHandlier = (e)=>{
        setAddress(e.target.value)
    }

    return (
    <section class="container">
      <form id="my-form">
        <h1>Sign up for our newsletter</h1>
        <div class="msg"></div>
        <div>
          <label for="name">Name:</label>
          <input onChange={nameHandlier} type="text" id="name" value={name} />
        </div>
        <div>
          <label for="email">Email:</label>
          <input onChange={addressHandlier} type="text" id="email" value={address} />
        </div>
        <input onClick={onclickHandlier} class="btn" type="submit" value="Submit" />
      </form>
{/* 
      <ul id="users"></ul>

      <ul class="items">
          <li class="item">Item 1</li>
          <li class="item">Item 2</li>
          <li class="item">Item 3</li>
        </ul>  */}
    </section>
    );
}

export default Bsform;
import React from 'react'

const Bsform = () =>{
    return (
    <section class="container">
      <form id="my-form">
        <h1>Sign up for our newsletter</h1>
        <div class="msg"></div>
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="text" id="email" />
        </div>
        <input class="btn" type="submit" value="Submit" />
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
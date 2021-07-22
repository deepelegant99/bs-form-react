import React, { useState, useEffect } from "react";

const Bsform = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [err, setErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (err === true) {
      setErrorMessage("Please enter required fields");
    }
  }, [err]);

  const onclickHandlier = (e) => {
    e.preventDefault();
    if (name === "" || address == "") {
      setErr(true);
    }
  };

  const nameHandlier = (e) => {
    setName(e.target.value);
  };

  const addressHandlier = (e) => {
    setAddress(e.target.value);
  };

  return (
    <section className="container">
      <form id="my-form">
        <h1>Sign up for our newsletter</h1>
        {/* <div className="msg"></div> */}
        <div className={`${err ? "error" : ""}`}>{errorMessage}</div>
        <div>
          <label for="name">Name:</label>
          <input onChange={nameHandlier} type="text" id="name" value={name} />
        </div>
        <div>
          <label for="email">Email:</label>
          <input
            onChange={addressHandlier}
            type="text"
            id="email"
            value={address}
          />
        </div>
        <input
          onClick={onclickHandlier}
          className="btn"
          type="submit"
          value="Submit"
        />
      </form>
      {/* 
      <ul id="users"></ul>

      <ul className="items">
          <li className="item">Item 1</li>
          <li className="item">Item 2</li>
          <li className="item">Item 3</li>
        </ul>  */}
    </section>
  );
};

export default Bsform;

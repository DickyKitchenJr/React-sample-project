import React, { useState, useRef } from "react";
import FormOutput from "./FormOutput";
import "./Form.css";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [list, setList] = useState([]);
  const [flip, setFlip] = useState(0);

  const blankFirstName = useRef(null);
  const blankLastName = useRef(null);
  const blankAge = useRef(null);

  const handleFirstNameRef = () => {
    if (firstName === "") {
      return blankFirstName.current.focus();
    } else {
      return;
    }
  };

  const handleLastNameRef = () => {
    if (lastName === "") {
      return blankLastName.current.focus();
    } else {
      return;
    }
  };

  const handleAgeRef = () => {
    if (age === "") {
      return blankAge.current.focus();
    } else {
      return;
    }
  };

  const handleClick = () => {
    setFlip(1);
    if (firstName && lastName && age) {
      const listRow = {
        id: new Date().getTime().toString(),
        firstName,
        lastName,
        age
      };
      setList((list) => {
        return [...list, listRow];
      });
      setFirstName("");
      setLastName("");
      setAge("");
    } else {
      alert("All entries required.");
      handleAgeRef();
      handleLastNameRef();
      handleFirstNameRef();
    }
  };

  // GOAL: to create a form that takes in data, does a flip animation, clears the data, and places data in a list

  return (
    <>
      <div className="form"> <form id="form1">
        <label htmlFor="item">First Name:</label>
        <br />
        <input
          ref={blankFirstName}
          type="text"
          name="item"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          flip={flip}
          onAnimationEnd={() => {
            setFlip(0);
            document.getElementById("form1").reset();
          }}
        />
        <br />
        <label htmlFor="quantity">Last Name:</label>
        <br />
        <input
          ref={blankLastName}
          type="text"
          name="quantity"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          flip={flip}
          onAnimationEnd={() => setFlip(0)}
        />
        <br />
        <label htmlFor="store">Age:</label>
        <br />
        <input
          ref={blankAge}
          type="text"
          name="store"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          flip={flip}
          onAnimationEnd={() => setFlip(0)}
        />
        <br />
        <button className="formButton" type="button" form="form1" onClick={() => handleClick()}>
          Add To List
        </button>
      </form>
      <FormOutput list={list} /> </div>
      
    </>
  );
}

export default Form;

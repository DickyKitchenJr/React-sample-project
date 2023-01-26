import React, { useState, useRef } from "react";
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
        age,
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

  const deletePerson = (id) => {
    const newList = list.filter((person) => person.id !== id);
    setList(newList);
  };

  // GOAL: to create a form that takes in data, does a flip animation, clears the data, and places data in a list

  return (
    <>
      <div className="form">
        <form id="form1">
          <label htmlFor="firstName">First Name:</label>
          <br />
          <input
            data-testid="firstName"
            ref={blankFirstName}
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            flip={flip}
            onAnimationEnd={() => {
              setFlip(0);
              document.getElementById("form1").reset();
            }}
          />
          <br />
          <label htmlFor="lastName">Last Name:</label>
          <br />
          <input
            data-testid="lastName"
            ref={blankLastName}
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            flip={flip}
            onAnimationEnd={() => setFlip(0)}
          />
          <br />
          <label htmlFor="age">Age:</label>
          <br />
          <input
            data-testid="Age"
            ref={blankAge}
            type="text"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            flip={flip}
            onAnimationEnd={() => setFlip(0)}
          />
          <br />
          <button
            className="formButton"
            type="button"
            form="form1"
            onClick={() => handleClick()}
          >
            Add To List
          </button>
        </form>
        {/* form output */}
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {list.map((list) => {
              const { id, firstName, lastName, age } = list;
              return (
                <tr key={id}>
                  <td data-testid="firstNameEntry">{firstName}</td>
                  <td data-testid="lastNameEntry">{lastName}</td>
                  <td data-testid="ageEntry">{age}</td>
                  <td>
                    <button
                      className="removeButton"
                      onClick={() => deletePerson(id)}
                    >
                      X
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Form;

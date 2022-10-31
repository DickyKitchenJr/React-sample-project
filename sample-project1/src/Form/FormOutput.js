import React from "react";
import "./FormOutput.css";

function FormOutput({ list }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {list.map((list) => {
            const { id, firstName, lastName, age } = list;
            return (
              <tr key={id}>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default FormOutput;

import React from "react";

function Mapping() {


  const Fruits = [
    {
      id: 1,
      name: "Apple",
      color: "Yellow"
    },
    {
      id: 2,
      name: "Strawberry",
      color: "Red"
    },

    {
      id: 3,
      name: "Kiwi",
      color: "Green"
    }
  ];



  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Color</th>

          </tr>
        </thead>

        <tbody>

          {Fruits.map(Fruits => <tr>


            <th scope="row">{Fruits.id}</th>
            <td> {Fruits.name}</td>
            <td> {Fruits.color}</td>
          </tr>)}
        </tbody>
      </table>
    </div>
  );


}

export default Mapping;


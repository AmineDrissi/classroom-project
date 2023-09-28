import React from "react";

const Students = (props) => {
  return (
    <div className="students">
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">E-mail</th>
            <th scope="col">Grade</th>
          </tr>
        </thead>
        <tbody>
        {props.students.map((s,i)=>{
            return <tr key={i}>
            <th scope="row">{i+1}</th>
            <td>{s.name}</td>
            <td>{s.mail}</td>
            <td>A</td>
          </tr>
        })}
        </tbody>
      </table>
    </div>
  );
};

export default Students;

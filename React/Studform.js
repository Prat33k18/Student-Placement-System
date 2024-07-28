import React from "react";

const Student = ({ st }) => {
  return (
    <tr>
      <td>{st.id}</td>
      <td>{st.name}</td>
      <td>{st.college}</td>
      <td>{st.date}</td>
      <td>{st.qualification}</td>
      <td>{st.year}</td>
    </tr>
  );
};

export default Student;

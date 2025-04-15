import React from "react";
import { Button } from "primereact/button";
import { Card } from "primereact/card";

const StudentCard = ({ student, index, setEditingStudent, setVisible, deleteStudent }) => (
  <Card className="p-shadow-4" style={{ padding: "1rem", borderRadius: "10px", position: "relative" }}>
    <p><strong>Name:</strong> {student.name}</p>
    <p><strong>Roll Number:</strong> {student.rollNumber}</p>
    <p><strong>Course:</strong> {student.course}</p>
    {student.email && <p><strong>Email:</strong> {student.email}</p>}
    {student.contact && <p><strong>Contact:</strong> {student.contact}</p>}
    {student.address && <p><strong>Address:</strong> {student.address}</p>}
    {student.dob && <p><strong>DOB:</strong> {new Date(student.dob).toLocaleDateString()}</p>}
    {student.doa && <p><strong>DOA:</strong> {new Date(student.doa).toLocaleDateString()}</p>}

    <div style={{ position: "absolute", top: "10px", right: "10px", display: "flex", gap: "10px" }}>
      <Button
        icon="pi pi-pencil"
        className="p-button-rounded p-button-secondary p-button-sm"
        onClick={() => {
          setEditingStudent({ ...student, index });
          setVisible(true);
        }}
      />
      <Button
        icon="pi pi-trash"
        className="p-button-rounded p-button-danger p-button-sm"
        onClick={() => {
          if (window.confirm(`Delete ${student.name}?`)) {
            deleteStudent(index);
          }
        }}
      />
    </div>
  </Card>
);

export default StudentCard;

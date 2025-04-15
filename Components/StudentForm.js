import React, { useState, useEffect } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";

const StudentForm = ({ visible, setVisible, addStudent, updateStudent, editingStudent }) => {
  const [name, setName] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [course, setCourse] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState(null);
  const [doa, setDoa] = useState(null);

  useEffect(() => {
    if (editingStudent) {
      setName(editingStudent.name);
      setRollNumber(editingStudent.rollNumber);
      setCourse(editingStudent.course);
      setAddress(editingStudent.address || "");
      setContact(editingStudent.contact || "");
      setEmail(editingStudent.email || "");
      setDob(editingStudent.dob ? new Date(editingStudent.dob) : null);
      setDoa(editingStudent.doa ? new Date(editingStudent.doa) : null);
    } else {
      // Clear the form for new student
      setName("");
      setRollNumber("");
      setCourse("");
      setAddress("");
      setContact("");
      setEmail("");
      setDob(null);
      setDoa(null);
    }
  }, [editingStudent]);
  

  const handleSave = () => {
    const updatedStudent = {
      name, rollNumber, course, address, contact, email, dob, doa
    };

    if (editingStudent) {
      updateStudent(editingStudent.index, updatedStudent);
    } else {
      addStudent(updatedStudent);
    }

    setVisible(false);
    setName(""); setRollNumber(""); setCourse("");
    setAddress(""); setContact(""); setEmail(""); setDob(null); setDoa(null);
  };

  return (
    <Dialog header={editingStudent ? "Edit Student" : "Create Student"} visible={visible}
      style={{ width: "90vw", maxWidth: "500px" }} onHide={() => setVisible(false)}>
      <div className="p-fluid" style={{ padding: "1rem" }}>
        <div className="p-field">
          <label>Name *</label>
          <InputText value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="p-field">
          <label>Roll Number *</label>
          <InputText value={rollNumber} onChange={(e) => setRollNumber(e.target.value)} />
        </div>
        <div className="p-field">
          <label>Course *</label>
          <InputText value={course} onChange={(e) => setCourse(e.target.value)} />
        </div>
        <div className="p-field">
          <label>Address *</label>
          <InputText value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div className="p-field">
          <label>Contact *</label>
          <InputText value={contact} onChange={(e) => setContact(e.target.value)} />
        </div>
        <div className="p-field">
          <label>Email *</label>
          <InputText value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="p-field">
          <label>DOB *</label>
          <Calendar value={dob} onChange={(e) => setDob(e.value)} showIcon dateFormat="yy-mm-dd" />
        </div>
        <div className="p-field">
          <label>DOA *</label>
          <Calendar value={doa} onChange={(e) => setDoa(e.value)} showIcon dateFormat="yy-mm-dd" />
        </div>
      </div>

      <div className="p-dialog-footer">
        <Button label="Cancel" className="p-button-text" onClick={() => setVisible(false)} />
        <Button label={editingStudent ? "Update" : "Create"} disabled={!name || !rollNumber || !course} onClick={handleSave} />
      </div>
    </Dialog>
  );
};

export default StudentForm;

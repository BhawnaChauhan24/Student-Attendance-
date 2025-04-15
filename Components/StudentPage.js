import React, { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import StudentCard from "./StudentCard";
import StudentForm from "./StudentForm";
import { useStudentState } from "../hooks/useStudentState"; // Custom hook to manage state

const StudentPage = () => {
    const {
        students,
        visible,
        setVisible,
        editingStudent,
        setEditingStudent,
        addStudent,
        updateStudent,
        deleteStudent,
    } = useStudentState();

    const [searchTerm, setSearchTerm] = useState("");

    const filteredStudents = students.filter((student) =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.rollNumber.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            {/* Create Button */}
            <div style={{ marginBottom: "10px" }}>
                <Button
                    icon="pi pi-plus"
                    className="p-button-rounded p-button-primary"
                    onClick={() => {
                        setEditingStudent(null);
                        setVisible(true);
                    }}
                />
            </div>

            {/* Search Input */}
            <InputText
                placeholder="Search student"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                    width: "100%",
                    padding: "0.75rem",
                    marginBottom: "1rem",
                    borderRadius: "10px",
                }}
            />

            {/* Students List */}
            {filteredStudents.length > 0 ? (
                <div
                    className="student-grid"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                        gap: "1rem",
                    }}
                >
                    {filteredStudents.map((student, index) => (
                        <StudentCard
                            key={index}
                            student={student}
                            index={index}
                            setEditingStudent={setEditingStudent}
                            setVisible={setVisible}
                            deleteStudent={deleteStudent}
                        />
                    ))}
                </div>
            ) : (
                <div style={{ textAlign: "center", marginTop: "2rem", fontSize: "1.2rem", color: "#888" }}>
                    <i className="pi pi-info-circle" style={{ marginRight: "0.5rem" }}></i>
                    No results found
                </div>
            )}

            {/* Dialog */}
            <StudentForm
                visible={visible}
                setVisible={setVisible}
                addStudent={addStudent}
                updateStudent={updateStudent}
                editingStudent={editingStudent}
            />
        </div>
    );
};

export default StudentPage;

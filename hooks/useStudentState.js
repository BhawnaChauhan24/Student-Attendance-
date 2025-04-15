import { useState } from "react";

export const useStudentState = () => {
  const [students, setStudents] = useState([]);
  const [visible, setVisible] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const updateStudent = (index, updatedStudent) => {
    const updatedStudents = [...students];
    updatedStudents[index] = updatedStudent;
    setStudents(updatedStudents);
  };

  const deleteStudent = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  };

  return {
    students,
    visible,
    setVisible,
    editingStudent,
    setEditingStudent,
    addStudent,
    updateStudent,
    deleteStudent
  };
};

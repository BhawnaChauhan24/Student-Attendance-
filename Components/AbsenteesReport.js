import React, { useState } from 'react';

const AbsenteesReport = () => {
  const [absentees, setAbsentees] = useState([
    { id: 1, name: "Muskan", reason: "Sick Leave" },
    { id: 2, name: "Lubhani", reason: "On holidays" },
    { id: 3, name: "Jatin", reason: "Urgent work" },
    { id: 4, name: "Diksha", reason: "Half Day Application" },
    { id: 5, name: "Sushant", reason: "Due to Occasion" },
    { id: 6, name: "Bhawna", reason: "Illness" },
    { id: 7, name: "Sandeep", reason: "Family emergencies" },
    { id: 8, name: "Khushi", reason: "Medical Appointment" },
  ]);

  const [newEntry, setNewEntry] = useState({ id: "", name: "", reason: "" });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEntry((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = () => {
    if (!newEntry.id || !newEntry.name) return;
    setAbsentees((prev) => [...prev, newEntry]);
    setNewEntry({ id: "", name: "", reason: "" });
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setNewEntry(absentees[index]);
  };

  const handleUpdate = () => {
    const updated = [...absentees];
    updated[editIndex] = newEntry;
    setAbsentees(updated);
    setNewEntry({ id: "", name: "", reason: "" });
    setEditIndex(null);
  };

  const handleDelete = (index) => {
    const updated = [...absentees];
    updated.splice(index, 1);
    setAbsentees(updated);
  };

  // Styles
  const styles = {
    container: { padding: '20px', fontFamily: 'Arial, sans-serif' },
    title: { textAlign: 'center', marginBottom: '20px' },
    form: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px',
      marginBottom: '20px',
      justifyContent: 'center',
    },
    input: {
      padding: '6px',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
    button: {
      padding: '6px 12px',
      border: 'none',
      backgroundColor: '#007bff',
      color: 'white',
      cursor: 'pointer',
      borderRadius: '4px',
    },
    cardsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '15px',
      justifyContent: 'center',
    },
    card: {
      width: '250px',
      backgroundColor: '#f0f8ff',
      border: '1px solid #cde',
      borderRadius: '10px',
      padding: '15px',
      boxShadow: '2px 2px 5px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s ease-in-out',
    },
    cardHover: {
      transform: 'scale(1.03)',
    },
    cardText: { margin: '8px 0' },
    cardActions: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '10px',
    },
    editBtn: {
      backgroundColor: '#ffc107',
      color: '#000',
      border: 'none',
      padding: '5px 10px',
      cursor: 'pointer',
      borderRadius: '4px',
    },
    deleteBtn: {
      backgroundColor: '#dc3545',
      color: '#fff',
      border: 'none',
      padding: '5px 10px',
      cursor: 'pointer',
      borderRadius: '4px',
    },
    emptyRow: { textAlign: 'center', fontStyle: 'italic', width: '100%' },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Absentees Report</h2>

      <div style={styles.form}>
        <input
          style={styles.input}
          type="text"
          name="id"
          placeholder="ID"
          value={newEntry.id}
          onChange={handleChange}
        />
        <input
          style={styles.input}
          type="text"
          name="name"
          placeholder="Name"
          value={newEntry.name}
          onChange={handleChange}
        />
        <input
          style={styles.input}
          type="text"
          name="reason"
          placeholder="Reason"
          value={newEntry.reason}
          onChange={handleChange}
        />
        {editIndex === null ? (
          <button style={styles.button} onClick={handleAdd}>Add</button>
        ) : (
          <button style={styles.button} onClick={handleUpdate}>Update</button>
        )}
      </div>

      <div style={styles.cardsContainer}>
        {absentees.length === 0 ? (
          <p style={styles.emptyRow}>No absentees</p>
        ) : (
          absentees.map((student, index) => (
            <div style={styles.card} key={index}>
              <p style={styles.cardText}><strong>ID:</strong> {student.id}</p>
              <p style={styles.cardText}><strong>Name:</strong> {student.name}</p>
              <p style={styles.cardText}><strong>Reason:</strong> {student.reason || "--"}</p>
              <div style={styles.cardActions}>
                <button style={styles.editBtn} onClick={() => handleEdit(index)}>Edit</button>
                <button style={styles.deleteBtn} onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AbsenteesReport;

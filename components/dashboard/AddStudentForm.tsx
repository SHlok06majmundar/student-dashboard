// components/dashboard/AddStudentForm.tsx
import { useState } from 'react';
import useStore from '@/store/useStore';

export function AddStudentForm() {
  const { setStudents } = useStore();
  const [newStudent, setNewStudent] = useState({ name: '', cohort: '', course: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newStudent),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to add student');
      }
      
      const addedStudent = await response.json();
      setStudents(prev => [...prev, addedStudent]);
      setNewStudent({ name: '', cohort: '', course: '' }); // Reset form
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Student Name"
        value={newStudent.name}
        onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Cohort"
        value={newStudent.cohort}
        onChange={(e) => setNewStudent({ ...newStudent, cohort: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Course"
        value={newStudent.course}
        onChange={(e) => setNewStudent({ ...newStudent, course: e.target.value })}
        required
      />
      <button type="submit">Add Student</button>
    </form>
  );
}

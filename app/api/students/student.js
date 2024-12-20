// pages/api/students.js
import { NextApiRequest, NextApiResponse } from 'next';

// In-memory data store for demonstration purposes
let students = [
  { 
    id: 1, 
    name: 'John Doe', 
    cohort: 'AY 2024-25', 
    courses: [{ id: 1, name: 'CBSE 9 Science', type: 'science' }], 
    dateJoined: '2024-01-01', 
    lastLogin: '2024-12-01', 
    status: 'active' 
  },
  { 
    id: 2, 
    name: 'Jane Smith', 
    cohort: 'AY 2023-24', 
    courses: [{ id: 2, name: 'CBSE 9 Math', type: 'math' }], 
    dateJoined: '2024-02-01', 
    lastLogin: null, 
    status: 'inactive' 
  },
];

export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      return res.status(200).json(students);

    case 'POST':
      const { name, cohort, course } = req.body;

      // Validate input
      if (!name || !cohort || !course || typeof course !== 'string') {
        return res.status(400).json({ message: 'All fields are required and course must be a string.' });
      }

      const newStudent = { 
        id: students.length + 1, 
        name, 
        cohort, 
        courses: [{ id: Date.now(), name: course, type: 'science' }],
        dateJoined: new Date().toISOString(), 
        lastLogin: null, 
        status: 'active' 
      };

      students.push(newStudent);
      return res.status(201).json(newStudent);

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      return res.status(405).json({ message: 'Method Not Allowed' });
  }
}

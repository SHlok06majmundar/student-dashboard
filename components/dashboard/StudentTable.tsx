'use client';

import { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BookOpen, User, Plus, Edit } from 'lucide-react';
import useStore from '@/store/useStore';

interface Course {
  id: string;
  name: string;
  type: 'science' | 'math';
}

interface Student {
  id: number; // Assume `id` is a number for this example
  name: string;
  cohort: string;
  courses: Course[];
  dateJoined: string;
  lastLogin: string;
  status: 'active' | 'inactive';
}

interface StudentFormData {
  name: string;
  cohort: string;
  courses: Course[];
  status: 'active' | 'inactive';
}

export function StudentTable() {
  const { students = [], setStudents } = useStore(); // Provide a default value of an empty array
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState<StudentFormData>({
    name: '',
    cohort: 'AY 2024-25',
    courses: [
      { id: '1', name: 'CBSE 9 Science', type: 'science' },
      { id: '2', name: 'CBSE 9 Math', type: 'math' }
    ],
    status: 'active'
  });
  const [editingStudentId, setEditingStudentId] = useState<number | null>(null); // Track the student being edited

  // Sample data for demonstration
  const sampleStudents: Student[] = [
    { id: 1, name: 'John Doe', cohort: 'AY 2024-25', courses: [{ id: '1', name: 'CBSE 9 Science', type: 'science' }], dateJoined: new Date().toISOString(), lastLogin: new Date().toISOString(), status: 'active' },
    { id: 2, name: 'Jane Smith', cohort: 'AY 2024-25', courses: [{ id: '2', name: 'CBSE 9 Math', type: 'math' }], dateJoined: new Date().toISOString(), lastLogin: new Date().toISOString(), status: 'inactive' },
    { id: 3, name: 'Alice Johnson', cohort: 'AY 2024-25', courses: [{ id: '1', name: 'CBSE 9 Science', type: 'science' }], dateJoined: new Date().toISOString(), lastLogin: new Date().toISOString(), status: 'active' },
    { id: 4, name: 'Bob Brown', cohort: 'AY 2024-25', courses: [{ id: '2', name: 'CBSE 9 Math', type: 'math' }], dateJoined: new Date().toISOString(), lastLogin: new Date().toISOString(), status: 'inactive' },
    { id: 5, name: 'Charlie Davis', cohort: 'AY 2024-25', courses: [{ id: '1', name: 'CBSE 9 Science', type: 'science' }], dateJoined: new Date().toISOString(), lastLogin: new Date().toISOString(), status: 'active' },
    { id: 6, name: 'Diana Evans', cohort: 'AY 2024-25', courses: [{ id: '2', name: 'CBSE 9 Math', type: 'math' }], dateJoined: new Date().toISOString(), lastLogin: new Date().toISOString(), status: 'inactive' },
    { id: 7, name: 'Eva Foster', cohort: 'AY 2024-25', courses: [{ id: '1', name: 'CBSE 9 Science', type: 'science' }], dateJoined: new Date().toISOString(), lastLogin: new Date().toISOString(), status: 'active' },
    { id: 8, name: 'Franklin Garcia', cohort: 'AY 2024-25', courses: [{ id: '2', name: 'CBSE 9 Math', type: 'math' }], dateJoined: new Date().toISOString(), lastLogin: new Date().toISOString(), status: 'inactive' },
    { id: 9, name: 'Gina Harris', cohort: 'AY 2024-25', courses: [{ id: '1', name: 'CBSE 9 Science', type: 'science' }], dateJoined: new Date().toISOString(), lastLogin: new Date().toISOString(), status: 'active' },
    { id: 10, name: 'Henry Lee', cohort: 'AY 2024-25', courses: [{ id: '2', name: 'CBSE 9 Math', type: 'math' }], dateJoined: new Date().toISOString(), lastLogin: new Date().toISOString(), status: 'inactive' }
  ];

  useEffect(() => {
    // Initially set sample data
    setStudents(sampleStudents);
  }, [setStudents]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingStudentId) {
      // Update existing student
      setStudents((prev) =>
        prev.map((student) => (student.id === editingStudentId ? { ...student, ...formData } : student))
      );
    } else {
      // Add new student
      const newStudent: Student = {
        id: Math.max(...students.map(s => s.id)) + 1, // Increment ID for new student
        ...formData,
        dateJoined: new Date().toISOString(),
        lastLogin: new Date().toISOString(),
      };
      setStudents((prev) => [...prev, newStudent]);
    }

    resetForm(); // Reset form state
    setIsDialogOpen(false); // Close dialog
    setEditingStudentId(null); // Reset editing state
  };

  const handleEditClick = (student: Student) => {
    setEditingStudentId(student.id);
    setFormData({
      name: student.name,
      cohort: student.cohort,
      courses: student.courses,
      status: student.status,
    });
    setIsDialogOpen(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      cohort: 'AY 2024-25',
      courses: [
        { id: '1', name: 'CBSE 9 Science', type: 'science' },
        { id: '2', name: 'CBSE 9 Math', type: 'math' }
      ],
      status: 'active'
    });
  };

  const getStatusDotStyle = (status: 'active' | 'inactive') => {
    return status === 'active' ? 'bg-green-500' : 'bg-red-500';
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Students</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gray-50 text-gray-900 hover:bg-gray-100">
              <Plus className="w-4 h-4 mr-2" />
              Add New Student
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editingStudentId ? 'Edit Student' : 'Add New Student'}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="cohort">Cohort</Label>
                  <Input
                    id="cohort"
                    value={formData.cohort}
                    onChange={(e) => setFormData({ ...formData, cohort: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="status">Status</Label>
                  <select
                    id="status"
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as 'active' | 'inactive' })}
                    required
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </div>
              <div className="mt-4">
                <Button type="submit" className="bg-blue-500 text-white">
                  {editingStudentId ? 'Update Student' : 'Add Student'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-medium">Name</TableHead>
            <TableHead className="font-medium">Cohort</TableHead>
            <TableHead className="font-medium">Courses</TableHead>
            <TableHead className="font-medium">Date Joined</TableHead>
            <TableHead className="font-medium">Last Login</TableHead>
            <TableHead className="font-medium">Status</TableHead>
            <TableHead className="font-medium">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.cohort}</TableCell>
              <TableCell>{student.courses.map(course => course.name).join(', ')}</TableCell>
              <TableCell>{new Date(student.dateJoined).toLocaleDateString()}</TableCell>
              <TableCell>{new Date(student.lastLogin).toLocaleDateString()}</TableCell>
              <TableCell>
                <div className="flex items-center">
                  <span className={`w-2.5 h-2.5 rounded-full ${getStatusDotStyle(student.status)}`} />
                  <span className="ml-2">{student.status}</span>
                </div>
              </TableCell>
              <TableCell>
                <Button variant="outline" onClick={() => handleEditClick(student)}>
                  <Edit className="w-4 h-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

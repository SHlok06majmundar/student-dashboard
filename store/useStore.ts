// store/useStore.ts
import { create } from 'zustand'
import { Student } from '@prisma/client'

interface StoreState {
  students: Student[]
  setStudents: (students: Student[]) => void
  addStudent: (student: Student) => void
}

const useStore = create<StoreState>((set) => ({
  students: [],
  setStudents: (students) => set({ students }),
  addStudent: (student) => set((state) => ({ students: [...state.students, student] })),
}))

export default useStore
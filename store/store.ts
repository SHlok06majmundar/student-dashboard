import { create } from 'zustand'
import { Student } from '@/types/student'
import { Chapter } from '@/types/chapter'
import { Report } from '@/types/report'

interface AppState {
  students: Student[]
  chapters: Chapter[]
  reports: Report[]
  setStudents: (students: Student[]) => void
  setChapters: (chapters: Chapter[]) => void
  setReports: (reports: Report[]) => void
  addStudent: (student: Student) => void
  addChapter: (chapter: Chapter) => void
  generateReport: (reportType: string) => void
  updateSettings: (settings: any) => void
}

const useAppStore = create<AppState>((set) => ({
  students: [],
  chapters: [],
  reports: [],
  setStudents: (students) => set({ students }),
  setChapters: (chapters) => set({ chapters }),
  setReports: (reports) => set({ reports }),
  addStudent: (student) => set((state) => ({ students: [...state.students, student] })),
  addChapter: (chapter) => set((state) => ({ chapters: [...state.chapters, chapter] })),
  generateReport: (reportType) => {
    // Logic to generate report based on type
    // This is a placeholder and should be replaced with actual report generation logic
    const newReport: Report = { id: Date.now(), type: reportType, data: {} };
    set((state) => ({ reports: [...state.reports, newReport] }));
  },
  updateSettings: (settings) => {
    // Logic to update user settings
    console.log('Updating settings:', settings);
    // This is a placeholder and should be replaced with actual settings update logic
  },
}))

export default useAppStore


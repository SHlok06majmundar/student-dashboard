import { DashboardHeader } from "@/components/dashboard/DashboardHeader"
import { StudentTable } from "@/components/dashboard/StudentTable"

export default function StudentsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Students</h1>
      <DashboardHeader />
      <div className="mt-6">
        <StudentTable />
      </div>
    </div>
  )
}


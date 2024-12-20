import { DashboardHeader } from "@/components/dashboard/DashboardHeader"
import { StudentTable } from "@/components/dashboard/StudentTable"
import { DashboardStats } from "@/components/dashboard/DashboardStats"

export default function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <DashboardHeader />
      <DashboardStats />
      <div className="mt-6">
        <StudentTable />
      </div>
    </div>
  )
}


import { DashboardHeader } from "@/components/dashboard/DashboardHeader"
import { StudentTable } from "@/components/dashboard/StudentTable"
import { Header } from "@/components/layout/Header"
import { Sidebar } from "@/components/layout/Sidebar"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <Header />
      <main className="ml-[240px] pt-16">
        <div className="p-6">
          <DashboardHeader />
          <div className="mt-6">
            <StudentTable />
          </div>
        </div>
      </main>
    </div>
  )
}


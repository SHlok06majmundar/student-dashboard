// components/reports/ReportsList.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/uiCard"; // Updated path
import { Button } from "@/components/ui/button";

const reports = [
  {
    id: 1,
    title: "Student Performance Report",
    description: "Overview of student performance across all subjects.",
    generatedAt: "2024-12-20",
  },
  {
    id: 2,
    title: "Course Completion Rates",
    description: "Statistics on course completions over the last semester.",
    generatedAt: "2024-12-15",
  },
  {
    id: 3,
    title: "Attendance Report",
    description: "Details of student attendance for the current academic year.",
    generatedAt: "2024-12-10",
  },
];

export function ReportsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {reports.map(report => (
        <Card key={report.id} className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle>{report.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{report.description}</CardDescription>
            <p className="text-gray-500 text-sm">Generated on: {report.generatedAt}</p>
            <Button className="mt-4">View Report</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

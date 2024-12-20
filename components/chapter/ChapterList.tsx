import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

const chapters = [
  { id: 1, name: "Introduction to Biology", subject: "Science", grade: "CBSE 9", status: "Published" },
  { id: 2, name: "Cell Structure and Function", subject: "Science", grade: "CBSE 9", status: "Draft" },
  { id: 3, name: "Algebra Basics", subject: "Mathematics", grade: "CBSE 9", status: "Published" },
  { id: 4, name: "Geometry Fundamentals", subject: "Mathematics", grade: "CBSE 9", status: "Review" },
]

export function ChapterList() {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">All Chapters</h2>
        <Button>Add New Chapter</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Chapter Name</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Grade</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {chapters.map((chapter) => (
            <TableRow key={chapter.id}>
              <TableCell className="font-medium">{chapter.name}</TableCell>
              <TableCell>{chapter.subject}</TableCell>
              <TableCell>{chapter.grade}</TableCell>
              <TableCell>{chapter.status}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">Edit</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}


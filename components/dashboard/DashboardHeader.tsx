// components/dashboard/DashboardHeader.tsx
'use client'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AddStudentForm } from './AddStudentForm'

export function DashboardHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-3">
        <Select defaultValue="AY 2024-25">
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Select year" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="AY 2024-25">AY 2024-25</SelectItem>
            <SelectItem value="AY 2023-24">AY 2023-24</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="CBSE 9">
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Select grade" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="CBSE 9">CBSE 9</SelectItem>
            <SelectItem value="CBSE 10">CBSE 10</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button>+ Add new Student</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Student</DialogTitle>
          </DialogHeader>
          <AddStudentForm />
        </DialogContent>
      </Dialog>
    </div>
  )
}
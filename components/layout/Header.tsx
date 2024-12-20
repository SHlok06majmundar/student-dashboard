"use client"; // Add this directive at the top

import { Bell, HelpCircle, Search, Settings } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export function Header() {
  const router = useRouter()

  return (
    <header className="fixed top-0 left-[240px] right-0 z-50 flex h-16 items-center justify-between border-b bg-white px-6">
      <div className="flex w-full max-w-md items-center">
        <Search className="absolute ml-2 h-4 w-4 text-gray-500" />
        <Input
          type="search"
          placeholder="Search your course"
          className="pl-8"
        />
      </div>
      <div className="flex items-center gap-4">
        <Link href="/help" className="rounded-full p-2 hover:bg-gray-100">
          <HelpCircle className="h-5 w-5" />
        </Link>
        <button className="rounded-full p-2 hover:bg-gray-100">
          <Bell className="h-5 w-5" />
        </button>
        <Link href="/settings" className="rounded-full p-2 hover:bg-gray-100">
          <Settings className="h-5 w-5" />
        </Link>
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="public\3.png" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">Adeline H. Dancy</p>
          </div>
        </div>
      </div>
    </header>
  )
}

'use client'

import { cn } from "@/lib/utils"
import { LayoutDashboard, Users, BookOpen, HelpCircle, BarChart2, Settings } from 'lucide-react'
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from 'next/image'; // Import Image component

const sidebarItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "Students",
    icon: Users,
    href: "/students",
  },
  {
    title: "Chapter",
    icon: BookOpen,
    href: "/chapter",
  },
  {
    title: "Help",
    icon: HelpCircle,
    href: "/help",
  },
  {
    title: "Reports",
    icon: BarChart2,
    href: "/reports",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="fixed left-0 h-full w-[240px] border-r bg-white">
      <div className="flex h-16 items-center border-b px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Image
            src="/2.png" // Correct path without 'public'
            alt="Bag Icon"
            width={32} // Specify width
            height={32} // Specify height
            className="object-contain" // Optional: adjust as needed
          />
          <span>Quyl.</span>
        </Link>
      </div>
      <nav className="flex flex-col gap-2 p-4">
        {sidebarItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-colors hover:text-gray-900",
              pathname === item.href ? "bg-gray-100 text-gray-900" : ""
            )}
          >
            <item.icon className="h-5 w-5" />
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  )
}

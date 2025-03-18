"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  BarChart3, 
  Settings, 
  Sparkles,
  GitBranch,
  FileCheck,
  Building,
  User,
  Workflow,
  Bot,
  LogOut,
  Menu
} from 'lucide-react'
import { cn } from '@/lib/utils'

export function Sidebar() {
  const pathname = usePathname()
  
  const routes = [
    {
      href: "/dashboard",
      icon: LayoutDashboard,
      title: "Dashboard",
    },
    {
      href: "/onboardings",
      icon: Users,
      title: "Onboardings",
    },
    {
      href: "/workflows",
      icon: Workflow,
      title: "Workflows",
    },
    {
      href: "/documents",
      icon: FileText,
      title: "Documents",
    },
    {
      href: "/analytics",
      icon: BarChart3,
      title: "Analytics",
    },
    {
      href: "/ai-copilot",
      icon: Bot,
      title: "AI Copilot",
    },
    {
      href: "/settings",
      icon: Settings,
      title: "Settings",
    },
  ]
  
  return (
    <div className="flex flex-col h-full justify-between border-r bg-background">
      <div className="py-2">
        <div className="hidden md:flex items-center px-4 py-2">
          <span className="font-bold">OnboardX</span>
        </div>
        <div className="space-y-1 py-2">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex items-center py-2 px-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                pathname === route.href
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground"
              )}
            >
              <route.icon className="mr-2 h-4 w-4" />
              <span className="hidden md:block">{route.title}</span>
            </Link>
          ))}
        </div>
      </div>
      <div className="p-4 border-t">
        <button className="flex items-center w-full py-2 px-4 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground">
          <LogOut className="mr-2 h-4 w-4" />
          <span className="hidden md:block">Logout</span>
        </button>
      </div>
    </div>
  )
} 
"use client"

import Link from 'next/link'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { 
  NavigationMenu, 
  NavigationMenuList, 
  NavigationMenuItem, 
  NavigationMenuLink,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { ModeToggle } from '@/components/mode-toggle'

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className={cn("", className)}>
      <div className="flex h-14 items-center px-6 gap-6">
        <Link href="/" className="font-bold text-xl flex items-center gap-2">
          OnboardX
        </Link>
        
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/dashboard" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Dashboard
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/workflows" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Workflows
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/onboardings" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Onboardings
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/ai-copilot" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  AI Copilot
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/analytics" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Analytics
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="ml-auto flex items-center gap-2">
          <ModeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden py-2 px-4 border-t">
          <nav className="flex flex-col space-y-2">
            <Link 
              href="/dashboard" 
              className="px-3 py-2 rounded-md hover:bg-muted text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              href="/workflows" 
              className="px-3 py-2 rounded-md hover:bg-muted text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Workflows
            </Link>
            <Link 
              href="/onboardings" 
              className="px-3 py-2 rounded-md hover:bg-muted text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Onboardings
            </Link>
            <Link 
              href="/ai-copilot" 
              className="px-3 py-2 rounded-md hover:bg-muted text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              AI Copilot
            </Link>
            <Link 
              href="/analytics" 
              className="px-3 py-2 rounded-md hover:bg-muted text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Analytics
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
} 
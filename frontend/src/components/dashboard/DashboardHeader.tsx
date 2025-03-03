"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { useAuth } from "@/contexts/AuthContext"
import { usePathname } from "next/navigation"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DashboardHeaderProps {
  username?: string;
  clientCode?: string;
  zCoins?: number;
}

export function DashboardHeader() {
  const { theme, setTheme } = useTheme()
  const { logout } = useAuth()
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-screen border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center justify-between w-full px-4">
        <div className="flex items-center">
          <SidebarTrigger className="md:hidden mr-2" />
          <Link href="/" className="flex items-center space-x-2 ml-2">
            <span className="font-bold">AlgoZ</span>
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-sm">
            <span>1,000</span>
          </div>
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <div className="text-right mr-2">
            <div className="font-medium">Den</div>
            <div className="text-sm text-muted-foreground">
              Client #123
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className="h-8 w-8 cursor-pointer">
                <AvatarFallback className="bg-primary text-primary-foreground">
                  {"J"}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem onClick={() => logout()}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}


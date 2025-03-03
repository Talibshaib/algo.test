"use client"

import React from "react";
import {
  Users,
  Settings,
  BarChart3,
  CreditCard,
  Shield,
  Home,
  ChevronLeft,
  Menu,
  LogOut,
  Bell,
  HelpCircle
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import Link from "next/link";
import { useAdminAuth } from "@/contexts/AdminAuthContext";

interface AdminSidebarProps {
  className?: string;
}

export default function AdminSidebar({ className }: AdminSidebarProps) {
  const { open, toggleSidebar } = useSidebar();
  const { logout } = useAdminAuth();

  return (
    <div
      className={cn(
        "bg-card border-r border-border h-full transition-all duration-300",
        open ? "w-64" : "w-[70px] min-w-[70px]",
        className
      )}
    >
      <div className="flex justify-between items-center p-4">
        {open && <span className="font-bold">Admin Panel</span>}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="h-8 w-8 rounded-full"
        >
          {open ? <ChevronLeft className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>
      <nav className="p-4 space-y-2">
        <Link
          href="/admin"
          className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors"
        >
          <Home className="h-5 w-5" />
          {open && <span>Dashboard</span>}
        </Link>

        <Link
          href="/admin/users"
          className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors"
        >
          <Users className="h-5 w-5" />
          {open && <span>User Management</span>}
        </Link>

        <Accordion type="single" collapsible className="w-full space-y-2">
          <AccordionItem value="analytics" className="border-none">
            <AccordionTrigger className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors">
              <div className="flex items-center space-x-3">
                <BarChart3 className="h-5 w-5" />
                {open && <span>Analytics</span>}
              </div>
            </AccordionTrigger>
            {open && (
              <AccordionContent>
                <div className="pl-11 space-y-2">
                  <Link
                    href="/admin/analytics/users"
                    className="block py-2 hover:text-primary transition-colors"
                  >
                    User Analytics
                  </Link>
                  <Link
                    href="/admin/analytics/revenue"
                    className="block py-2 hover:text-primary transition-colors"
                  >
                    Revenue
                  </Link>
                  <Link
                    href="/admin/analytics/usage"
                    className="block py-2 hover:text-primary transition-colors"
                  >
                    Platform Usage
                  </Link>
                </div>
              </AccordionContent>
            )}
          </AccordionItem>
        </Accordion>

        <Link
          href="/admin/payments"
          className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors"
        >
          <CreditCard className="h-5 w-5" />
          {open && <span>Payments</span>}
        </Link>

        <Link
          href="/admin/notifications"
          className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors"
        >
          <Bell className="h-5 w-5" />
          {open && <span>Notifications</span>}
        </Link>

        <Link
          href="/admin/settings"
          className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors"
        >
          <Settings className="h-5 w-5" />
          {open && <span>Settings</span>}
        </Link>

        {open && (
          <div className="py-2">
            <div className="h-[1px] bg-border" />
          </div>
        )}

        <Link
          href="/admin/help"
          className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors"
        >
          <HelpCircle className="h-5 w-5" />
          {open && <span>Help & Support</span>}
        </Link>

        <button
          onClick={logout}
          className="flex w-full items-center space-x-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors text-left"
        >
          <LogOut className="h-5 w-5" />
          {open && <span>Logout</span>}
        </button>

        {/* Removed User Dashboard link as requested */}
      </nav>
    </div>
  );
}
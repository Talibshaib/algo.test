"use client"
import React from "react";
import {
  Home,
  LayoutDashboard,
  LineChart,
  Zap,
  Copy,
  HeadphonesIcon,
  HelpCircle,
  CreditCard,
  ChevronLeft,
  Menu,
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
import { useIsMobile } from "@/hooks/use-mobile";

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
  const { open, toggleSidebar, isMobile } = useSidebar();
  return (
    <div
      className={cn(
        "bg-card border-r border-border h-full transition-all duration-300",
        open ? "w-64" : "w-[70px] min-w-[70px]",
        className
      )}
    >
      <div className="flex justify-between items-center p-4">
        {open && <span className="font-bold">Menu</span>}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="h-8 w-8 rounded-full"
        >
          {open ? <ChevronLeft className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>
      <nav className="sticky p-4 space-y-2">
        {/* <a
          href="#"
          className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors"
        >
          <Home className="h-5 w-5" />
          {open && <span>Home</span>}
        </a> */}

        <a
          href="#"
          className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors"
        >
          <LayoutDashboard className="h-5 w-5" />
          {open && <span>Dashboard</span>}
        </a>

        {open && (
          <div className="py-2">
            <div className="h-[1px] bg-border" />
          </div>
        )}

        <Accordion type="single" collapsible className="w-full space-y-2">
          <AccordionItem value="tradingview" className="border-none">
            <AccordionTrigger className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors">
              <div className="flex items-center space-x-3">
                <LineChart className="h-5 w-5" />
                {open && <span>TradingView</span>}
              </div>
            </AccordionTrigger>
            {open && (
              <AccordionContent>
                <div className="pl-11 space-y-2">
                  <a
                    onClick={() => window.location.href = "/connect/tradingview"}
                    className="block py-2 hover:text-primary transition-colors cursor-pointer"
                  >
                    Broker Auth
                  </a>
                  <a
                    href="#"
                    className="block py-2 hover:text-primary transition-colors"
                  >
                    Webhook URL
                  </a>
                  <a
                    href="#"
                    className="block py-2 hover:text-primary transition-colors"
                  >
                    Symbol
                  </a>
                  <a
                    href="#"
                    className="block py-2 hover:text-primary transition-colors"
                  >
                    JSON
                  </a>
                  <a
                    href="#"
                    className="block py-2 hover:text-primary transition-colors"
                  >
                    Trade Logs
                  </a>
                </div>
              </AccordionContent>
            )}
          </AccordionItem>

          <AccordionItem value="scalping" className="border-none">
            <AccordionTrigger className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors">
              <div className="flex items-center space-x-3">
                <Zap className="h-5 w-5" />
                {open && <span>Scalping Tool</span>}
              </div>
            </AccordionTrigger>
            {open && (
              <AccordionContent>
                <div className="pl-11 space-y-2">
                  <a
                    onClick={() => window.location.href = "/connect/scalping"}
                    className="block py-2 hover:text-primary transition-colors cursor-pointer"
                  >
                    Broker Auth
                  </a>
                  <a
                    href="#"
                    className="block py-2 hover:text-primary transition-colors"
                  >
                    Trade Panel
                  </a>
                </div>
              </AccordionContent>
            )}
          </AccordionItem>

          <AccordionItem value="copytrading" className="border-none">
            <AccordionTrigger className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors">
              <div className="flex items-center space-x-3">
                <Copy className="h-5 w-5" />
                {open && <span>Copy Trading</span>}
              </div>
            </AccordionTrigger>
            {open && (
              <AccordionContent>
                <div className="pl-11 space-y-2">
                  <a
                    onClick={() => window.location.href = "/connect/copytrading"}
                    className="block py-2 hover:text-primary transition-colors cursor-pointer"
                  >
                    Broker Authentication
                  </a>
                  <a
                    href="#"
                    className="block py-2 hover:text-primary transition-colors"
                  >
                    Strategy
                  </a>
                  <a
                    href="#"
                    className="block py-2 hover:text-primary transition-colors"
                  >
                    Manage
                  </a>
                </div>
              </AccordionContent>
            )}
          </AccordionItem>

          <AccordionItem value="strategy" className="border-none">
            <AccordionTrigger className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors">
              <div className="flex items-center space-x-3">
                <LineChart className="h-5 w-5" />
                {open && <span>Strategy</span>}
              </div>
            </AccordionTrigger>
            {open && (
              <AccordionContent>
                <div className="pl-11 space-y-2">
                  <a
                    href="#"
                    className="block py-2 hover:text-primary transition-colors"
                  >
                    Pine Script
                  </a>
                  <a
                    href="#"
                    className="block py-2 hover:text-primary transition-colors"
                  >
                    MQL
                  </a>
                  <a
                    href="#"
                    className="block py-2 hover:text-primary transition-colors"
                  >
                    AFL
                  </a>
                </div>
              </AccordionContent>
            )}
          </AccordionItem>
        </Accordion>

        <a
          href="#pricing"
          className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors"
        >
          <CreditCard className="h-5 w-5" />
          {open && <span>Pricing</span>}
        </a>

        {open && (
          <div className="py-2">
            <div className="h-[1px] bg-border" />
          </div>
        )}

        <a
          href="#"
          className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors"
        >
          <HeadphonesIcon className="h-5 w-5" />
          {open && <span>Contact Us</span>}
        </a>

        <a
          href="#"
          className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors"
        >
          <HelpCircle className="h-5 w-5" />
          {open && <span>FAQ</span>}
        </a>
      </nav>
    </div>
  );
}

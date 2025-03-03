"use client"

import React from "react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import PricingSection from "@/components/dashboard/PricingSection";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardPage() {
  return (
    <SidebarProvider defaultOpen>
      <div className="relative min-h-screen flex flex-col">
        <DashboardHeader />
        <div className="flex flex-1 w-full">
          <Sidebar />
          <main className="flex-1 p-6">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Welcome to AlgoZ Dashboard</h1>
              <p className="text-muted-foreground">
                Manage your trading strategies and monitor your performance
              </p>
            </div>
            
            {/* Dashboard content would go here */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="font-medium mb-2">Active Strategies</h3>
                <p className="text-3xl font-bold">3</p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="font-medium mb-2">Total Trades</h3>
                <p className="text-3xl font-bold">127</p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="font-medium mb-2">Win Rate</h3>
                <p className="text-3xl font-bold">68%</p>
              </div>
            </div>

            <PricingSection />
          
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

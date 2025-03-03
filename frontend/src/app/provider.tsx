"use client"
import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { AuthProvider } from "@/contexts/AuthContext";
import { AdminAuthProvider } from "@/contexts/AdminAuthContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <AuthProvider>
        <AdminAuthProvider>
          {children}
        </AdminAuthProvider>
      </AuthProvider>
    </NextUIProvider>
  );
}

"use client"

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type Admin = {
  _id: string;
  username: string;
  role: string;
} | null;

type AdminAuthContextType = {
  admin: Admin;
  login: (email: string, password: string, securityAnswer: string) => Promise<boolean>;
  logout: () => Promise<boolean>;
  isLoading: boolean;
  error: string;
  getAdminToken: () => string | null;
};

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

export function AdminAuthProvider({ children }: { children: React.ReactNode }) {
  const [admin, setAdmin] = useState<Admin>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();
  
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1";

  // Check if admin is logged in on initial load
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const storedAdmin = localStorage.getItem("adminUser");
        if (storedAdmin) {
          try {
            const adminData = JSON.parse(storedAdmin);
            setAdmin(adminData);
          } catch (parseError) {
            console.error("Error parsing admin data:", parseError);
            localStorage.removeItem("adminUser");
            setAdmin(null);
          }
        }
      } catch (error) {
        console.error("Admin auth check error:", error);
        localStorage.removeItem("adminUser");
        setAdmin(null);
      } finally {
        setIsLoading(false);
      }
    };
    
    checkAuthStatus();
  }, []);

  // Admin login function
  const login = async (email: string, password: string, securityAnswer: string) => {
    setError("");
    try {
      setIsLoading(true);
      
      // Hardcoded admin credentials
      const ADMIN_EMAIL = "mdtalib23038@gmail.com";
      const ADMIN_PASSWORD = "admin4545";
      const SECURITY_ANSWER = "cat"; // Assuming the answer to "What is your favorite pet?"
      
      if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD && securityAnswer.toLowerCase() === SECURITY_ANSWER) {
        const adminData = {
          _id: "admin-1",
          username: "admin",
          role: "admin"
        };
        
        setAdmin(adminData);
        localStorage.setItem("adminUser", JSON.stringify(adminData));
        router.push("/admin");
        return true;
      } else {
        setError("Invalid admin credentials or security answer");
        return false;
      }
    } catch (error) {
      console.error("Admin login error:", error);
      setError("An error occurred during login");
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      setIsLoading(true);
      
      setAdmin(null);
      localStorage.removeItem("adminUser");
      router.push("/login");
      return true;
    } catch (error) {
      console.error("Admin logout error:", error);
      // Even if there's an error, we should still clear local state
      setAdmin(null);
      localStorage.removeItem("adminUser");
      router.push("/login");
      return true;
    } finally {
      setIsLoading(false);
    }
  };

  // Function to get admin token for API requests
  const getAdminToken = () => {
    // In a real application, this would return a JWT token
    // For now, we'll return a hardcoded token for testing
    return admin ? "admin-token-for-testing" : null;
  };

  return (
    <AdminAuthContext.Provider value={{ admin, login, logout, isLoading, error, getAdminToken }}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext);
  if (context === undefined) {
    throw new Error("useAdminAuth must be used within an AdminAuthProvider");
  }
  return context;
}
"use client"

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type User = {
  _id: string;
  fullName: string;
  email: string;
  username: string;
  avatar?: string;
  coverImage?: string;
  isAdmin?: boolean;
} | null;

type AuthContextType = {
  user: User;
  login: (emailOrUsername: string, password: string) => Promise<boolean>;
  signup: (fullName: string, email: string, username: string, password: string) => Promise<boolean>;
  logout: () => Promise<boolean>;
  isLoading: boolean;
  error: string;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();
  
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1";

  // Check if user is logged in on initial load
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          // Verify the token is still valid by making a request to get current user
          const response = await fetch(`${API_URL}/users/current-user`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            },
            credentials: "include" // Important for cookies
          });
          
          if (response.ok) {
            const data = await response.json();
            setUser(data.data);
          } else {
            // Token is invalid or expired
            localStorage.removeItem("user");
            setUser(null);
          }
        }
      } catch (error) {
        console.error("Auth check error:", error);
        localStorage.removeItem("user");
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };
    
    checkAuthStatus();
  }, [API_URL]);

  // Real login function that calls the backend API
  const login = async (emailOrUsername: string, password: string) => {
    setError("");
    try {
      setIsLoading(true);
      
      const response = await fetch(`${API_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
          // Send as both email and username, backend will handle which one is provided
          email: emailOrUsername.includes("@") ? emailOrUsername : undefined,
          username: !emailOrUsername.includes("@") ? emailOrUsername : undefined,
          password 
        }),
        credentials: "include" // Important for cookies
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setUser(data.data.user);
        localStorage.setItem("user", JSON.stringify(data.data.user));
        router.push("/dashboard");
        return true;
      } else {
        setError(data.message || "Login failed");
        return false;
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred during login");
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Real signup function that calls the backend API
  const signup = async (fullName: string, email: string, username: string, password: string) => {
    setError("");
    try {
      setIsLoading(true);
      
      const formData = new FormData();
      formData.append("fullName", fullName);
      formData.append("email", email);
      formData.append("username", username);
      formData.append("password", password);
      
      const response = await fetch(`${API_URL}/users/register`, {
        method: "POST",
        body: formData,
        credentials: "include" // Important for cookies
      });
      
      const data = await response.json();
      
      if (response.ok) {
        // Don't set user or store in localStorage after signup
        // Instead, redirect to landing page for explicit login
        router.push("/");
        return true;
      } else {
        setError(data.message || "Registration failed");
        return false;
      }
    } catch (error) {
      console.error("Signup error:", error);
      setError("An error occurred during registration");
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      setIsLoading(true);
      
      const response = await fetch(`${API_URL}/users/logout`, {
        method: "POST",
        credentials: "include" // Important for cookies
      });
      
      if (response.ok) {
        setUser(null);
        localStorage.removeItem("user");
        router.push("/");
        return true;
      } else {
        const data = await response.json();
        setError(data.message || "Logout failed");
        return false;
      }
    } catch (error) {
      console.error("Logout error:", error);
      // Even if the API call fails, we should still clear local state
      setUser(null);
      localStorage.removeItem("user");
      router.push("/");
      return true;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isLoading, error }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
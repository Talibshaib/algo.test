"use client"

import { Button, Checkbox } from "@nextui-org/react"
import Link from "next/link"
import { Input } from "@nextui-org/react"
import { useState, useEffect } from "react"
import { useAuth } from "@/contexts/AuthContext"
import { useAdminAuth } from "@/contexts/AdminAuthContext"
import { useRouter } from "next/navigation"


export default function LoginPage() {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [securityAnswer, setSecurityAnswer] = useState("");
  const [showSecurityQuestion, setShowSecurityQuestion] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login, error: authError } = useAuth();
  const { login: adminLogin, error: adminAuthError } = useAdminAuth();
  const router = useRouter();
  
  // Admin credentials
  const ADMIN_EMAIL = "mdtalib23038@gmail.com";
  const ADMIN_PASSWORD = "admin4545";

  // Check if entered credentials match admin credentials
  useEffect(() => {
    if (emailOrUsername === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setShowSecurityQuestion(true);
    } else {
      setShowSecurityQuestion(false);
      setSecurityAnswer("");
    }
  }, [emailOrUsername, password]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    
    try {
      // If admin credentials are entered and security question is shown
      if (showSecurityQuestion) {
        // Try admin login
        const adminSuccess = await adminLogin(emailOrUsername, password, securityAnswer);
        if (!adminSuccess) {
          setError(adminAuthError || "Invalid admin credentials or security answer");
        }
      } else {
        // Regular user login
        const success = await login(emailOrUsername, password);
        if (!success) {
          setError(authError || "Invalid username/email or password");
        }
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen max-w-screen items-center justify-center">
      <div className="mx-auto grid w-full max-w-[400px] gap-6">
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="text-muted-foreground">Enter your credentials to access your account</p>
        </div>
        {error && (
          <div className="p-3 text-sm bg-red-100 border border-red-200 text-red-600 rounded-md">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <label htmlFor="emailOrUsername">Email or Username</label>
            <Input 
              id="emailOrUsername" 
              type="text" 
              placeholder="name@example.com or username" 
              value={emailOrUsername}
              onChange={(e) => setEmailOrUsername(e.target.value)}
              required 
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <label htmlFor="password">Password</label>
              <Link href="#" className="text-sm text-primary underline-offset-4 hover:underline">
                Forgot password?
              </Link>
            </div>
            <Input 
              id="password" 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          
          {/* Security question field - only shown when admin credentials are entered */}
          {showSecurityQuestion && (
            <div className="grid gap-2">
              <label htmlFor="securityQuestion">Security Question: What is your favorite pet?</label>
              <Input 
                id="securityQuestion" 
                type="text" 
                placeholder="Your answer" 
                value={securityAnswer}
                onChange={(e) => setSecurityAnswer(e.target.value)}
                required 
              />
            </div>
          )}
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <label htmlFor="remember" className="text-sm font-normal">
              Remember me for 30 days
            </label>
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </form>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Button variant="bordered">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            GitHub
          </Button>
          <Button variant="bordered">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
            Facebook
          </Button>
        </div>
        <div className="text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-primary underline-offset-4 hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}


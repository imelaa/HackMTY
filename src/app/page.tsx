"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Button } from "../app/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
} from "../app/components/ui/card";
import { Input } from "../app/components/ui/input";
import { Label } from "../app/components/ui/label";

// Mock function to check if user is logged in
const isLoggedIn = (): boolean => {
  // Replace this with your actual authentication check
  return false;
};

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = React.useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = React.useState<{
    email: string;
    password: string;
    general: string;
  }>({
    email: "",
    password: "",
    general: "",
  });

  React.useEffect(() => {
    if (isLoggedIn()) {
      router.push("/main");
    }
  }, [router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name in errors) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validateForm = (): boolean => {
    const newErrors = { ...errors };
    let isValid = true;

    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password cannot be empty.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const validateEmail = (email: string): boolean => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const handleSubmit = () => {
    if (!validateForm()) return;
    // Handle form submission (e.g., authenticate user)
    router.push("/main");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "#004977" }}
    >
      <Card className="w-full md:w-[400px] border border-gray-300 rounded-lg">
        <CardHeader className="flex flex-col items-center">
          <img src="/logo.svg" alt="Logo" className="w-32 h-auto" />
          <CardDescription className="mt-2">
            Login to your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 p-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
          {errors.general && (
            <p className="text-red-500 text-sm">{errors.general}</p>
          )}
          <div className="flex flex-col space-y-2">
            <Button
              className="w-full bg-[#D22E1E] hover:bg-[#B01E0E]"
              onClick={handleSubmit}
            >
              Login
            </Button>
            <p className="text-center text-red-600 mt-4">
              <a href="/signup">Create your account</a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

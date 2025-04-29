'use client'

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { FiMail, FiLock } from "react-icons/fi";

import Image from "next/image";

import { useRouter } from "next/navigation";

const Page = () => {
    const router  = useRouter();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        const validEmail = "william@gmail.com";
        const validPassword = "william@123";
    
        if (email === validEmail && password === validPassword) {
          router.push("/pages/dashboard"); // redirect to dashboard
        } else {
          alert("Invalid email or password.");
        }
      };


  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <Card className="w-full max-w-md bg-white">
        <div className="flex justify-center">
          <Image src='/logo.png' alt="Logo" width={200} height={53}></Image>
        </div>
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold text-gray-800">
            Welcome Back
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
            <div className="relative">
              <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="pl-10 bg-gray-50 border border-gray-300 text-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="password"
                id="password"
                placeholder="••••••••"
                className="pl-10 bg-gray-50 border border-gray-300 text-black"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <Button onClick={handleLogin} className="w-full bg-green-400 hover:bg-green-500 text-white font-semibold">
            Sign In
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;

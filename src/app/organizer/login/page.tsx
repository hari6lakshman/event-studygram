"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { organizers } from "@/lib/organizers";
import { useToast } from "@/hooks/use-toast";

export default function OrganizerLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { toast } = useToast();

  const handleLogin = () => {
    const organizer = organizers.find(o => o.username === username && o.password === password);
    if (organizer) {
      // In a real app, you'd set up a session. For this prototype, we'll just redirect.
      toast({
        title: "Login Successful!",
        description: "Redirecting to your dashboard...",
      });
      router.push("/organizer/dashboard");
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid username or password.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-10rem)] py-12">
      <Card className="w-full max-w-md border-4 border-primary">
        <CardHeader>
          <CardTitle>Organizer Login</CardTitle>
          <CardDescription>Enter your credentials to manage your events.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input 
              id="username" 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input 
              id="password" 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full" onClick={handleLogin}>Log In</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

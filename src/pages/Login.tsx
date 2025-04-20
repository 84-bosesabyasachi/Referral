<<<<<<< HEAD
=======

>>>>>>> 9d7fe3185d264aec0040cfbb271fd38314bb0070
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, Facebook, Linkedin, X } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [magicLinkEmail, setMagicLinkEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleMagicLinkSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle magic link login logic here
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle regular login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md mx-4 p-6 bg-white shadow-sm">
        <CardContent className="p-0">
          <h1 className="text-2xl font-semibold text-center mb-6">
            Login to ReferralHub
          </h1>

          <Button
            variant="outline"
            className="w-full mb-6 gap-2"
<<<<<<< HEAD
            onClick={() => {
              /* Handle Google/Microsoft login */
            }}
=======
            onClick={() => {/* Handle Google/Microsoft login */}}
>>>>>>> 9d7fe3185d264aec0040cfbb271fd38314bb0070
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google/Microsoft
          </Button>

          <div className="space-y-4">
            <h2 className="text-lg font-medium">Magic Link Login</h2>
            <form onSubmit={handleMagicLinkSubmit} className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={magicLinkEmail}
                  onChange={(e) => setMagicLinkEmail(e.target.value)}
                  className="w-full"
                />
              </div>
<<<<<<< HEAD
              <Button
                type="submit"
                className="w-full bg-[#4F46E5] hover:bg-[#4338CA]"
              >
=======
              <Button type="submit" className="w-full bg-[#4F46E5] hover:bg-[#4338CA]">
>>>>>>> 9d7fe3185d264aec0040cfbb271fd38314bb0070
                Send Magic Link
              </Button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or</span>
              </div>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="robert.fox@myemail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="password">Password</Label>
<<<<<<< HEAD
                  <Link
                    to="/forgot-password"
                    className="text-[#4F46E5] text-sm hover:underline"
                  >
=======
                  <Link to="/forgot-password" className="text-[#4F46E5] text-sm hover:underline">
>>>>>>> 9d7fe3185d264aec0040cfbb271fd38314bb0070
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
<<<<<<< HEAD
                <Label htmlFor="remember" className="text-sm">
                  Remember Me
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#4F46E5] hover:bg-[#4338CA]"
              >
=======
                <Label htmlFor="remember" className="text-sm">Remember Me</Label>
              </div>

              <Button type="submit" className="w-full bg-[#4F46E5] hover:bg-[#4338CA]">
>>>>>>> 9d7fe3185d264aec0040cfbb271fd38314bb0070
                Login
              </Button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or</span>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-50">
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  className="w-5 h-5"
                />
              </button>
              <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-50">
                <Facebook size={20} className="text-[#1877F2]" />
              </button>
              <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-50">
                <X size={20} />
              </button>
              <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-50">
                <Linkedin size={20} className="text-[#0A66C2]" />
              </button>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/register" className="text-[#4F46E5] hover:underline">
              Register here
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;

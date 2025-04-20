import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Edit } from "lucide-react";

const UserProfile = () => {
    return (
        <div className="space-y-6 max-w-2xl">
            <div className="flex items-center space-x-4">
                <h2 className="text-xl font-semibold">Profile</h2>
            </div>

            <div className="flex items-center gap-4 mb-8">
                <Avatar className="w-20 h-20">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>KS</AvatarFallback>
                </Avatar>
                <Button variant="outline" size="sm">
                    <Edit className="w-4 h-4 mr-2" />
                    Change Avatar
                </Button>
            </div>

            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <label className="text-sm font-medium">User Name</label>
                    <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                    </Button>
                </div>
                <Input value="Kadin Stanton" readOnly />

                <div>
                    <label className="text-sm font-medium">User Phone</label>
                    <Input value="1234567890" readOnly />
                </div>

                <div>
                    <label className="text-sm font-medium">Email</label>
                    <Input value="kadinstanton@gmail.com" readOnly />
                </div>

                <div className="flex justify-between items-center">
                    <div>
                        <label className="text-sm font-medium">Password</label>
                        <Input type="password" value="******" readOnly />
                    </div>
                    <Button variant="outline" className="ml-4">
                        Change Password
                    </Button>
                </div>

                <div className="flex justify-center space-x-4 pt-6">
                    <Button variant="outline" className="text-red-500 hover:text-red-600">
                        Delete Account
                    </Button>
                    <Button variant="destructive">Sign Out</Button>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
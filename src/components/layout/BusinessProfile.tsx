
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const BusinessProfile = () => {
    return (
        <div className="space-y-6 max-w-4xl">
            <div>
                <h2 className="text-xl font-semibold mb-4">Business Profile</h2>
            </div>

            <div className="grid gap-6">
                <div>
                    <label className="text-sm font-medium">Business Logo</label>
                    <Button variant="outline" className="mt-2">Choose Image</Button>
                </div>

                <div>
                    <label className="text-sm font-medium">Business Description</label>
                    <Textarea placeholder="Enter description..." className="mt-2" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="text-sm font-medium">Business Name</label>
                        <Input placeholder="Enter business name" className="mt-2" />
                    </div>
                    <div>
                        <label className="text-sm font-medium">Business Email</label>
                        <Input placeholder="e.g., robert.fox@myemail.com" className="mt-2" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="text-sm font-medium">Business Phone No.</label>
                        <Input placeholder="Enter phone no." className="mt-2" />
                    </div>
                    <div>
                        <label className="text-sm font-medium">Industry</label>
                        <Select>
                            <SelectTrigger className="mt-2">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="tech">Technology</SelectItem>
                                <SelectItem value="retail">Retail</SelectItem>
                                <SelectItem value="healthcare">Healthcare</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="text-sm font-medium">Services</label>
                        <Input placeholder="Enter services..." className="mt-2" />
                    </div>
                    <div>
                        <label className="text-sm font-medium">Products</label>
                        <Input placeholder="Enter products..." className="mt-2" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="text-sm font-medium">Company Size (Optional)</label>
                        <Select>
                            <SelectTrigger className="mt-2">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1-10">1-10 employees</SelectItem>
                                <SelectItem value="11-50">11-50 employees</SelectItem>
                                <SelectItem value="51-200">51-200 employees</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <label className="text-sm font-medium">City</label>
                        <Select>
                            <SelectTrigger className="mt-2">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="sf">San Francisco</SelectItem>
                                <SelectItem value="nyc">New York City</SelectItem>
                                <SelectItem value="la">Los Angeles</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="text-sm font-medium">State</label>
                        <Select>
                            <SelectTrigger className="mt-2">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="ca">California</SelectItem>
                                <SelectItem value="ny">New York</SelectItem>
                                <SelectItem value="tx">Texas</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <label className="text-sm font-medium">Zip Code</label>
                        <Input placeholder="Enter zip code" className="mt-2" />
                    </div>
                </div>

                <div className="flex justify-end">
                    <Button>Save</Button>
                </div>
            </div>
        </div>
    );
};

export default BusinessProfile;
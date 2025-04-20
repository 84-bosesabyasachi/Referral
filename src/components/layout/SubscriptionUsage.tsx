
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const SubscriptionUsage = () => {
    return (
        <div className="max-w-4xl space-y-8">
            <div className="space-y-4">
                <h2 className="text-xl font-semibold">Current Plan</h2>
                <div className="bg-white p-6 rounded-lg border">
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-medium">Your Current Plan is Basic</h3>
                            <p className="text-sm text-gray-500">A simple start for everyone</p>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-medium">Days</span>
                                <span className="text-sm">12 of 30 Days</span>
                            </div>
                            <Progress value={40} />
                            <p className="text-xs text-gray-500">18 days remaining until your plan requires update</p>
                        </div>

                        <div className="pt-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className="font-medium">$25</span>
                                    <span className="text-gray-500 text-sm"> Per Month</span>
                                    <div className="inline-flex items-center ml-2 px-2 py-0.5 rounded text-xs bg-blue-100 text-blue-800">
                                        Popular
                                    </div>
                                </div>
                                <div className="space-x-2">
                                    <Button variant="outline" className="text-red-500">Cancel Subscription</Button>
                                    <Button>Upgrade Plan</Button>
                                </div>
                            </div>
                            <p className="text-sm text-gray-500 mt-2">Standard plan for small to medium businesses</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl font-semibold">Payment Methods</h2>
                <div className="space-y-4">
                    <RadioGroup defaultValue="card" className="space-y-4">
                        <div className="flex items-center space-x-4 p-4 border rounded-lg">
                            <RadioGroupItem value="card" id="card" />
                            <Label htmlFor="card">Credit/Debit/ATM Card</Label>
                        </div>
                        <div className="flex items-center space-x-4 p-4 border rounded-lg">
                            <RadioGroupItem value="paypal" id="paypal" />
                            <Label htmlFor="paypal">Paypal account</Label>
                        </div>
                    </RadioGroup>
                </div>
            </div>

            <div className="space-y-4">
                <h2 className="text-xl font-semibold">Billing History</h2>
                <div className="border rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Plan Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Issued Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {[
                                { status: "Pending", color: "bg-yellow-100 text-yellow-800" },
                                { status: "Failed", color: "bg-red-100 text-red-800" },
                                { status: "Paid", color: "bg-green-100 text-green-800" },
                            ].map((item, i) => (
                                <tr key={i}>
                                    <td className="px-6 py-4 whitespace-nowrap">Standard Plan</td>
                                    <td className="px-6 py-4 whitespace-nowrap">$25</td>
                                    <td className="px-6 py-4 whitespace-nowrap">28/09/2024</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item.color}`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <Button variant="ghost" size="sm">
                                            Download
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SubscriptionUsage;
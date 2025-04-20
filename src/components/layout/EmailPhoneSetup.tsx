
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const EmailPhoneSetup = () => {
    return (
        <div className="space-y-8 max-w-3xl">
            <div className="space-y-6">
                <div>
                    <h2 className="text-xl font-semibold">Global Email Sending Address</h2>
                    <p className="text-sm text-gray-500 mt-1">
                        Choose how your outgoing emails (referral links, follow-ups, etc.) are sent from the platform.
                    </p>
                </div>

                <RadioGroup defaultValue="system" className="space-y-4">
                    <div className="flex items-start space-x-4">
                        <RadioGroupItem value="system" id="system-email" />
                        <div className="space-y-2">
                            <Label htmlFor="system-email" className="font-medium">Use System Email</Label>
                            <p className="text-sm text-gray-500">
                                Emails will be sent using ReferralHub's default system address (e.g., notify@ReferralHub.app).
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <RadioGroupItem value="custom" id="custom-email" />
                        <div className="space-y-2">
                            <Label htmlFor="custom-email" className="font-medium">Connect Your Custom Email Domain</Label>
                            <p className="text-sm text-gray-500">
                                Improve deliverability and brand recognition by sending from your own domain (e.g., you@yourcompany.com).
                            </p>
                            <Button variant="outline" className="mt-2">Connect Email Domain</Button>
                        </div>
                    </div>
                </RadioGroup>
            </div>

            <div className="space-y-6">
                <div>
                    <h2 className="text-xl font-semibold">Global SMS Sending Number</h2>
                    <p className="text-sm text-gray-500 mt-1">
                        Choose how SMS messages (referral links, updates, rewards) are sent to your customers.
                    </p>
                </div>

                <RadioGroup defaultValue="system" className="space-y-4">
                    <div className="flex items-start space-x-4">
                        <RadioGroupItem value="system" id="system-phone" />
                        <div className="space-y-2">
                            <Label htmlFor="system-phone" className="font-medium">Use System Phone Number</Label>
                            <p className="text-sm text-gray-500">
                                Messages will be sent from a standard number owned by ReferralHub.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <RadioGroupItem value="custom" id="custom-phone" />
                        <div className="space-y-2">
                            <Label htmlFor="custom-phone" className="font-medium">Connect Your Own Phone Number</Label>
                            <p className="text-sm text-gray-500">
                                Use a verified number for better brand trust and consistency.
                            </p>
                            <Button variant="outline" className="mt-2">Connect Phone Number</Button>
                        </div>
                    </div>
                </RadioGroup>
            </div>
        </div>
    );
};

export default EmailPhoneSetup;

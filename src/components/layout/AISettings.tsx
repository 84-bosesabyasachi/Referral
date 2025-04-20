import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const AISettings = () => {
    return (
        <div className="space-y-6 max-w-2xl">
            <h2 className="text-xl font-semibold">AI Settings</h2>

            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                        <Label>Enable AI Suggestions</Label>
                        <p className="text-sm text-gray-500">
                            Receive personalized suggestions based on your activity
                        </p>
                    </div>
                    <Switch />
                </div>

                <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                        <Label>AI-Powered Analytics</Label>
                        <p className="text-sm text-gray-500">
                            Use AI to analyze your data and provide insights
                        </p>
                    </div>
                    <Switch />
                </div>

                <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                        <Label>Automated Responses</Label>
                        <p className="text-sm text-gray-500">
                            Let AI handle routine customer inquiries
                        </p>
                    </div>
                    <Switch />
                </div>
            </div>
        </div>
    );
};

export default AISettings;
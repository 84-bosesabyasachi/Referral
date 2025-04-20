
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function PayoutSettings() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium">Prepaid Money</h3>
          <p className="text-sm text-gray-500">Use Prepaid to disperse promoters instantly</p>
        </div>
        <Switch />
      </div>

      <Card className="p-6 bg-blue-50 border-blue-100">
        <div className="text-sm font-medium mb-2">Current Point Balance</div>
        <div className="text-2xl font-bold text-blue-600 mb-4">1,250 Points</div>
        
        <div className="space-y-4">
          <div>
            <Label htmlFor="amount">Enter Amount</Label>
            <Input id="amount" placeholder="Enter amount..." className="mt-1" />
            <p className="text-xs text-gray-500 mt-1">Max Prepay: 25 points per $1</p>
          </div>

          <div className="space-y-3">
            <Label>Payment Methods</Label>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <input type="radio" name="payment" id="credit" defaultChecked />
                <label htmlFor="credit">Credit/Debit/ATM Card</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" name="payment" id="paypal" />
                <label htmlFor="paypal">Paypal Account</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" name="payment" id="bank" />
                <label htmlFor="bank">Bank Transfer</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" name="payment" id="upi" />
                <label htmlFor="upi">UPI</label>
              </div>
            </div>
          </div>

          <Button className="w-full">Buy Points</Button>
        </div>
      </Card>
    </div>
  );
}

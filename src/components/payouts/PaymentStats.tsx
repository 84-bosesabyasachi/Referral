
import { Card } from "@/components/ui/card";

interface PaymentStatProps {
  label: string;
  value: string;
  date?: string;
}

export default function PaymentStats({ label, value, date }: PaymentStatProps) {
  return (
    <Card className="p-4 flex flex-col gap-1">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="text-2xl font-semibold">{value}</div>
      {date && <div className="text-sm text-gray-500">{date}</div>}
    </Card>
  );
}

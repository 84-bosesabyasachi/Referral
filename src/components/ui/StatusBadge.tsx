
import { cn } from '@/lib/utils';

type StatusType = 'pending' | 'completed' | 'active' | 'inactive';

interface StatusBadgeProps {
  status: StatusType;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className={cn(
      "status-badge",
      status === 'pending' && "status-badge-pending",
      status === 'completed' && "status-badge-completed",
      status === 'active' && "status-badge-active",
      status === 'inactive' && "status-badge-inactive",
    )}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}

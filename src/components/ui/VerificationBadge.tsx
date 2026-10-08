import type { VerificationStatus } from "@/types";
import { VERIFICATION_LABELS } from "@/lib/format";

const styles: Record<VerificationStatus, string> = {
  verified: "bg-verified-soft text-verified border-verified",
  unverified: "bg-pending-soft text-pending border-pending",
  pending: "bg-pending-soft text-pending border-pending",
  outdated: "bg-outdated-soft text-outdated border-outdated",
};

export function VerificationBadge({ status }: { status: VerificationStatus }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${styles[status]}`}
    >
      {VERIFICATION_LABELS[status]}
    </span>
  );
}

import { NOT_VERIFIED } from "@/lib/format";

export function VerifiedValue({ value }: { value: string | null | undefined }) {
  if (value === null || value === undefined || value === "") {
    return <span className="italic text-pending">{NOT_VERIFIED}</span>;
  }
  return <>{value}</>;
}

export function ImageCredit({
  credit,
  source,
  license,
}: {
  credit: string | null;
  source: string | null;
  license: string | null;
}) {
  if (!credit && !license && !source) return null;
  return (
    <p className="text-xs text-subtle">
      {credit ? <>Photo: {credit}</> : "Photo: unknown"}
      {license ? <> · {license}</> : null}
      {source ? (
        <>
          {" · "}
          <a
            href={source}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-accent"
          >
            Wikimedia Commons
          </a>
        </>
      ) : null}
    </p>
  );
}

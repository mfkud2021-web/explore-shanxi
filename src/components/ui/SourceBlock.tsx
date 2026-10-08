import type { Source } from "@/types";
import { SOURCE_LEVEL_LABELS, formatDate } from "@/lib/format";

export function SourceBlock({ sources }: { sources: Source[] }) {
  if (sources.length === 0) {
    return (
      <p className="text-sm text-muted">
        No verified sources yet. Content is pending verification.
      </p>
    );
  }

  return (
    <ul className="space-y-2">
      {sources.map((s, i) => (
        <li key={i} className="text-sm text-foreground">
          <span className="font-medium">{s.source_name}</span>{" "}
          <span className="text-subtle">({SOURCE_LEVEL_LABELS[s.source_level]})</span>
          {s.source_checked_at ? (
            <span className="text-subtle"> · checked {formatDate(s.source_checked_at)}</span>
          ) : null}
          {s.source_url ? (
            <>
              {" "}
              <a
                href={s.source_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline underline-offset-2 hover:text-accent-hover"
              >
                Open source
              </a>
            </>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

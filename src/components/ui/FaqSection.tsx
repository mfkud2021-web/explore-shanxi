import type { FAQItem } from "@/types";

export function FaqSection({ faqs }: { faqs: FAQItem[] }) {
  if (faqs.length === 0) return null;
  return (
    <section>
      <h2 className="font-serif text-2xl font-semibold">Frequently asked questions</h2>
      <div className="mt-4 divide-y divide-border rounded-xl border border-border bg-surface">
        {faqs.map((f) => (
          <details key={f.question} className="group px-5 py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-foreground [&::-webkit-details-marker]:hidden">
              <span>{f.question}</span>
              <span
                className="shrink-0 text-lg leading-none text-accent transition-transform group-open:rotate-45"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="mt-3 text-muted">{f.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export type SourceLevel = 1 | 2 | 3 | 4;

export interface Source {
  source_name: string;
  source_url: string | null;
  source_checked_at: string | null;
  source_level: SourceLevel;
}

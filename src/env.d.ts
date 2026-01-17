/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly PUBLIC_PLAUSIBLE_ENABLED?: string;
  readonly PUBLIC_PLAUSIBLE_DOMAIN?: string;
  readonly PUBLIC_PLAUSIBLE_SCRIPT_URL?: string;
  readonly PUBLIC_PLAUSIBLE_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

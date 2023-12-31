// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly NEWT_SPACE_UID: string;
  readonly NEWT_CDN_API_TOKEN: string;
  readonly PUBLIC_OG_FQDN: string;
}

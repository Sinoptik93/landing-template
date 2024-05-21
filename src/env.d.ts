/// <reference types="astro/client" />
/// <reference types="vite-plugin-svgr/client" />


/**
 * [Source](https://docs.astro.build/en/guides/environment-variables/)
 */
interface ImportMetaEnv {
    readonly PRIVATE_KEY: string;
    readonly PUBLIC_KEY_EXAMPLE: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

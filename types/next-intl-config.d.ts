declare module 'next-intl/config' {
  type NextIntlBaseConfig = {
    locales: readonly string[];
    defaultLocale: string;
  } & Record<string, unknown>;

  /**
   * Helper to provide typed configuration for next-intl.
   */
  export function defineConfig<T extends NextIntlBaseConfig>(config: T): T;

  const _default: typeof defineConfig;
  export default _default;
}


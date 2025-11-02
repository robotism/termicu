import type { LocaleObject } from "@nuxtjs/i18n";

export default {
  dir: "locales",
  languages: [
    {
      code: "en",
      name: "English",
      files: ["en-US.ts"],
    },
    {
      code: "zh",
      name: "中文",
      files: ["zh-CN.ts"],
    },
  ] as const satisfies LocaleObject[],
};

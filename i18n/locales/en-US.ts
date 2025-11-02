import moment from "moment";
import "moment/dist/locale/en-gb";

import quasarLangEn from "quasar/lang/en-US.js";

if (!moment.locales().includes("en")) {
  moment.defineLocale("en", {
    parentLocale: "en-gb",
  });
}

export default defineI18nLocale(async (locale) => {
  return {
    app: {
      name: "TermICU",
    },
    nav: {
      "": "Connect",
      cog: "Configuration",
      info: "About",
    },
    quasar: {
      ...quasarLangEn,
    },
  };
});

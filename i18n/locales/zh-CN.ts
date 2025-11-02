import moment from "moment";
import "moment/dist/locale/zh-cn";

import quasarLangZh from "quasar/lang/zh-CN.js";

if (!moment.locales().includes("zh")) {
  moment.defineLocale("zh", {
    parentLocale: "zh-cn",
  });
}

export default defineI18nLocale(async (locale) => {
  return {
    app: {
      name: "终端 ICU",
    },
    nav: {
      "": "连接",
      cog: "配置",
      info: "关于",
    },
    quasar: {
      ...quasarLangZh,
    },
  };
});

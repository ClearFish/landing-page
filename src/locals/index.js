import { createI18n } from 'vue-i18n'
import en from './en.json'
import yindi from './yindi.json'
import vi from './vi.json'
import zh from "./zh.json"
const messages = {
  en,
  yindi,
  vi,
  zh
}
const i18n = createI18n({
  legacy: false,          // 禁用Vue2兼容模式
  locale:getLocalLanguage(),          // 默认语言
  fallbackLocale: 'vi',   // 回退语言
  globalInjection: true,  // 全局注入$t方法
  messages
})
function getLocalLanguage() {
  const locales = Object.keys(messages);
  const browserLanguage = navigator.language.toLowerCase();
  if (locales.includes(browserLanguage)) return browserLanguage;

  const browserMain = browserLanguage.split("-")[0];
  console.log(browserMain);
  if (browserMain === "zh" && locales.includes("zh")){
    return "zh";
  } else if (browserMain === "vi" && locales.includes("vi")){
    return "vi";
  } else {
    return "en";
  }
}
export default i18n
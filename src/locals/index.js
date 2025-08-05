import { createI18n } from 'vue-i18n'
import en from './en.json'
import yindi from './yindi.json'
const messages = {
  en,
  yindi
}
const i18n = createI18n({
  legacy: false,          // 禁用Vue2兼容模式
  locale:localStorage.getItem('lang') || 'en',          // 默认语言
  fallbackLocale: 'en',   // 回退语言
  globalInjection: true,  // 全局注入$t方法
  messages
})

export default i18n
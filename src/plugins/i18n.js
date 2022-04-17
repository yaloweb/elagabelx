import axios from 'axios'
import { createI18n } from 'vue-i18n'

export const i18n = createI18n({
    locale: 'ru',
    fallbackLocale: 'ru',
    allowComposition: true
})

export async function loadLanguageAsync () {
    const res = await axios.get('translation')
    i18n.global.setLocaleMessage('ru', res.data)
    i18n.locale = 'ru'
}

import I18n from 'react-native-i18n';

// I18n.fallbacks = true;

I18n.translations = {
    th: {
        greeting: 'สวัสดีค้าบ'
    },
    en: {
        greeting: 'Hi!',
    },
    fr: {
        greeting: 'Bonjour!',
    },
};
I18n.locale = 'th'

export default I18n
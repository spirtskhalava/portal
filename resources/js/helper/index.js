export const translate = (lang, key, isDefault = 'default') => {
    let languageList = null;
    if (lang === 'ka') {
        languageList = require(`../locale/ka`);
    } else {
        languageList = require(`../locale/en`);
    }
    return languageList[`${isDefault}`][key]
}
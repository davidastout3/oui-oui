export default {

    variableText: "",

    get(key = "", variableText) {
        const payload = this.library[key];
        if (payload) {
            if(variableText) {
                return payload[this.language].replace('_variableText_', variableText) || `#R:${this.language}:${key}#`
            }
            var regex = /^\s*$/;
            return (payload[this.language] || payload[this.language].match(regex)) ? payload[this.language] : `#R:${this.language}:${key}#`
        }
        return `#R:${key}#`;
    },

    language: "en",

    setLanguage(newLanguage = "en") {
        this.language = newLanguage
    },

    library: {
        "HelloWorld": {
            "fr": "bonjour le monde",
            "en": "hello world"
        }
    }

}

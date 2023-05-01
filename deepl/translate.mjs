import axios from 'axios';
import clipboardy from "clipboardy";

//from command node path/to/this/file.js deepl-token target-language
const [_, __, token, target] = process.argv

const DEEPL_TOKEN = token
const TARGET_LANGUAGE = target
const BASE_URL = `https://api-free.deepl.com/v2`;

const clipboardContent = clipboardy.readSync();


const response = await axios.post(`${BASE_URL}/translate`, {
    text: [clipboardContent],
    target_lang: TARGET_LANGUAGE
}, {
    headers: {
        authorization: `DeepL-Auth-Key ${DEEPL_TOKEN}`
    }
})

clipboardy.writeSync(response.data.translations[0].text)

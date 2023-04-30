import axios from 'axios';
import clipboardy from "clipboardy";

//from command node path/to/this/file.js feedly-token to-read-board-id
const [_, __, token, id] = process.argv

const FEEDLY_TOKEN = token
const BOARD_ID = id

const BASE_URL = "https://cloud.feedly.com/v3";

const urlToReadLater = clipboardy.readSync()

const result = await axios.post(`${BASE_URL}/entries`, {
    "tags": [
        {
            "id": BOARD_ID
        },
    ],
    "alternate": [
        {
            "href": urlToReadLater,
            "type": "text/html"
        }
    ],
    "origin": {
        "htmlUrl": urlToReadLater
    }
}, {
    headers: {
        authorization: `Bearer ${FEEDLY_TOKEN}`
    }
});

const entryId = result.data[0];

await axios.put(`${BASE_URL}/tags/${encodeURI(BOARD_ID)}/${encodeURI(entryId)}`, {}, {
    headers: {
        authorization: `Bearer ${FEEDLY_TOKEN}`
    }
});



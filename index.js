const { readJSONFile, writeJSONFile } = require('./src/helpers');
const cookies = readJSONFile('./data', 'cookies.json');
const { index, create } = require('./src/cookieController')

const inform = console.log;

function run() {
    const action = process.argv[2];
    const cookie = process.argv[3];

    let writeToFile = false
    let updatedCookies = []

    switch (action) {
        case "index":
            const cookiesView = index(cookies);
            inform(cookiesView);
            break;
        case "create":
            updatedCookies = create(cookies, cookie);
            writeToFile = true;
            break;
        default:
            inform('There was an error.');
    }
    if (writeToFile) {
         writeJSONFile('./data', 'cookies.json', updatedCookies);
    }
}
run()
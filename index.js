const { readJSONFile, writeJSONFile } = require('./src/helpers');
const cookies = readJSONFile('./data', 'cookies.json');
const { index, create, show, update, destroy, total } = require('./src/cookieController')

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
        case "show":
            const cookieView = show(cookies, cookie);
            inform(cookieView);
            break;
        case "update":
            updatedCookies = update(cookies, cookie, process.argv[4]);
            writeToFile = true;
            break;
        case "destroy":
            updatedCookies = destroy(cookies, cookie);
            writeToFile = true;
            break;
        case "total":
            const totalView = total(cookies)
            inform(totalView);
            break;
        default:
            inform('There was an error.');
    }
    if (writeToFile) {
         writeJSONFile('./data', 'cookies.json', updatedCookies);
    }
}
run()
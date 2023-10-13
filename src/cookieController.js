const { nanoid } = require('nanoid')
const cookiePrices = require('../data/cookiePrices.json')

function index(cookies) {
    return cookies.map((cookie) => cookie.id + ' ' + cookie.name + ' $' + (cookie.priceInCents/100).toFixed(2)).join('\n');
  }

function create(cookies, cookieName){
    const cookie = { 
        name: cookieName, 
        id: nanoid(4),
        priceInCents: cookiePrices[cookieName] || 100
    }
    cookies.push(cookie)
    return cookies
}

module.exports = {
    index,
    create,
}
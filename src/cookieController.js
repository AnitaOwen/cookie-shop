const { nanoid } = require('nanoid')
const cookiePrices = require('../data/cookiePrices.json')

function index(cookies) {
    return cookies.map((cookie) => cookie.id + ' ' + cookie.name + ' $' + (cookie.priceInCents/100).toFixed(2)).join('\n');
  }

function create(cookies, cookieName){
    const found = cookiePrices.find((cookie) => cookie.name === cookieName)
    const cookie = { 
        name: cookieName, 
        id: nanoid(4),
        priceInCents: found.priceInCents || 100
    }
    cookies.push(cookie)
    return cookies
}

function show(cookies, cookieId) {
    const cookie = cookies.find((cookie) => cookie.id === cookieId);
    return cookie.id + ' ' + cookie.name + ' $' + (cookie.priceInCents/100).toFixed(2);
  }

  function update(cookies, cookieId, updatedCookie) {
    const index = cookies.findIndex((cookie) => cookie.id === cookieId);
    if (index > -1) {
      cookies[index].id = cookieId;
      cookies[index].name = updatedCookie;
      cookies[index].priceInCents = cookiePrices[updatedCookie] || 100
      inform('Cookie successfully updated');
    } else {
      inform('Cookie not found. No action taken');
    }
    return cookies
  }

  function destroy(cookies, cookieId) {
    const index = cookies.findIndex((cookie) => cookie.id === cookieId);
    if (index > -1) {
      cookies.splice(index, 1);
      inform('Cookie successfully removed from list');
    } else {
      inform('Cookie not found. No action taken');
    }
    return cookies
  }

  function total(cookies) {
    const total = cookies.reduce((acc, current) => acc + current.priceInCents, 0);
    return `$${(total / 100).toFixed(2)}`
  }

module.exports = {
    index,
    create,
    show, 
    update,
    destroy, 
    total
}
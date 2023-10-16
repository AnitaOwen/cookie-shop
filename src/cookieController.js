const { nanoid } = require('nanoid')
const cookiePrices = require('../data/cookiePrices.json')
const inform = console.log;

function index(cookies) {
  if(cookies.length === 0){
    inform('The cart is empty')
  }
  const formattedCookies = cookies.map((cookie) => cookie.id + ' ' + cookie.name + ' $' + (cookie.priceInCents/100).toFixed(2)).join('\n')
  return formattedCookies
}

function create(cookies, cookieName){
    const found = cookiePrices.find((cookie) => cookie.name === cookieName.toLowerCase())
    if(found){
        const cookie = {
            name: found.name, 
            id: nanoid(4),
            priceInCents: found.priceInCents,
            description: found.description
        }
        cookies.push(cookie)
    } else if(found === undefined){
        inform('Cookie not found. No action taken')
    }
    return cookies    
}

function show(cookies, cookieId) {
    if(cookieId === "menu"){
        return cookiePrices.map((cookie) => cookie.name + ' $' + (cookie.priceInCents/100).toFixed(2)).join('\n')
    } else if(cookieId === "vegan"){
        const vegan = cookiePrices.filter((cookie) => cookie.isVegan === true)
        return vegan.map((cookie) => '(vegan) ' + cookie.name + ' $' + (cookie.priceInCents/100).toFixed(2)).join('\n')
    } else if (cookieId === "nutfree"){
        const nutFree = cookiePrices.filter((cookie) => cookie.containsNuts === false)
        return nutFree.map((cookie) => '(nut-free) ' + cookie.name + ' $' + (cookie.priceInCents/100).toFixed(2)).join('\n')
    } 
    
    const found = cookies.find((cookie) => cookie.id === cookieId);
    if(found === undefined){
        inform('Cookie not found. No action taken')
    } else {
        const price = (found.priceInCents/100).toFixed(2)
        return `${found.id} ${found.name} $${price} \n${found.description}`
    }
}

  function update(cookies, cookieId, updatedCookie) {
    const found = cookiePrices.find((cookie) => cookie.name === updatedCookie.toLowerCase())
    const index = cookies.findIndex((cookie) => cookie.id === cookieId);
    if (index > -1 && found) {
      cookies[index].id = cookieId;
      cookies[index].name = found.name;
      cookies[index].priceInCents = found.priceInCents;
      cookies[index].description = found.description
      inform('Cookie successfully updated');
    } else {
      inform('Cookie not found. No action taken');
    }
    return cookies
  }

  function destroy(cookies, cookieId) {
    if(cookieId === "all"){
        return cookies = []
    }
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
    const cartItems = cookies.map((cookie) => cookie.name + ' $' + (cookie.priceInCents/100).toFixed(2))
    return `${cartItems.join('\n')}\n(${cartItems.length} items) Total: $${(total / 100).toFixed(2)}`
  }

module.exports = {
    index,
    create,
    show, 
    update,
    destroy, 
    total
}
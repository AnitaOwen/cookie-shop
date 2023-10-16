const { index, create, show, update, destroy, total } = require("../src/cookieController.js")
const cookiePrices = require("../data/cookiePrices.json")
const cookies = require("../data/cookies.json")
const inform = console.log;

describe("Cookie Controller Tests", ()=>{
    describe("index", ()=>{
        it("should take an array of cookie objects and return a formatted list of cookies", ()=>{
            const input = [
                {
                  "name": "chocolate chip",
                  "id": "Ffsu",
                  "priceInCents": 150,
                  "description": "Classic chocolate chip cookies with a perfect balance of sweet and chocolatey."
                },
                {
                  "name": "biscotti",
                  "id": "9lzu",
                  "priceInCents": 150,
                  "description": "Crunchy Italian biscotti, perfect for dipping in coffee or tea."
                }
              ]
            const actual = index(input)
            const expected = 
            "Ffsu chocolate chip $1.50\n" +
            "9lzu biscotti $1.50"
            expect(actual).toEqual(expected)
        })

        it("should take an empty array and return an empty string", ()=>{
            const input = []
            const actual = index(input)
            const expected = ""
            expect(actual).toEqual(expected)
        })
    })

    describe("create", ()=>{
        it("should create a new cookie object with the given name", ()=>{
            const input1 = []
            const input2 = "chocolate chip"
            const actual = create(input1, input2)
            const expected = [
                {
                  "name": "chocolate chip",
                  "id": expect.any(String),
                  "priceInCents": 150,
                  "description": "Classic chocolate chip cookies with a perfect balance of sweet and chocolatey."
                }
              ]
            expect(actual).toEqual(expected)
        })

        it("should return an empty array if cookie name does not match any cookie object", ()=>{
            const input1 = []
            const input2 = "chocolate chipp"
            const actual = create(input1, input2)
            const expected = []
            expect(actual).toEqual(expected)
        })
    })

    describe("show", ()=>{
        it("should show a formatted list of all menu items", ()=>{
            const input1 = []
            const input2 = "menu"
            const actual = show(input1, input2)
            const expected = 
            "chocolate chip $1.50\n" +
            "oatmeal raisin $1.20\n" +
            "peanut butter $1.30\n" +
            "snickerdoodle $1.40\n" +
            "double chocolate $1.60\n" +
            "sugar cookie $1.00\n" +
            "gingerbread $1.20\n" +
            "shortbread $1.30\n" +
            "biscotti $1.50\n" +
            "vanilla creme $1.60\n" +
            "white chocolate macadamia $1.40\n" +
            "peanut butter chocolate chip $1.70\n" +
            "oatmeal cranberry $1.40\n" +
            "lemon zest $1.20\n" +
            "snickerdoodle chocolate chip $1.50\n" +
            "almond biscotti $1.60"
            expect(actual).toEqual(expected)
        })

        it("should show a formatted list of all vegan menu items", ()=>{
            const input1 = []
            const input2 = "vegan"
            const actual = show(input1, input2)
            const expected = 
            "(vegan) peanut butter $1.30\n" +
            "(vegan) double chocolate $1.60\n" +
            "(vegan) gingerbread $1.20\n" +
            "(vegan) oatmeal cranberry $1.40\n" +
            "(vegan) lemon zest $1.20"
            expect(actual).toEqual(expected)
        })

        it("should show a formatted list of all nut-free menu items", ()=>{
            const input1 = []
            const input2 = "nutfree"
            const actual = show(input1, input2)
            const expected = 
            "(nut-free) chocolate chip $1.50\n" +
            "(nut-free) snickerdoodle $1.40\n" +
            "(nut-free) double chocolate $1.60\n" +
            "(nut-free) sugar cookie $1.00\n" +
            "(nut-free) gingerbread $1.20\n" +
            "(nut-free) shortbread $1.30\n" +
            "(nut-free) biscotti $1.50\n" +
            "(nut-free) vanilla creme $1.60\n" +
            "(nut-free) lemon zest $1.20\n" +
            "(nut-free) snickerdoodle chocolate chip $1.50"
            expect(actual).toEqual(expected)
        })

        it("should show the details of a specific cookie by its unique ID ", ()=>{
            const input1 = [
                {
                  "name": "chocolate chip",
                  "id": "Ffsu",
                  "priceInCents": 150,
                  "description": "Classic chocolate chip cookies with a perfect balance of sweet and chocolatey."
                },
                {
                  "name": "biscotti",
                  "id": "9lzu",
                  "priceInCents": 150,
                  "description": "Crunchy Italian biscotti, perfect for dipping in coffee or tea."
                }
            ]
            const input2 = "9lzu"
            const actual = show(input1, input2)
            const expected = 
            "9lzu biscotti $1.50 \n" +
            "Crunchy Italian biscotti, perfect for dipping in coffee or tea."
            expect(actual).toEqual(expected)
        })

        it("should return undefined if provided cookie id does not match any cookie object", ()=>{
            const input1 = [
                {
                  "name": "chocolate chip",
                  "id": "Ffsu",
                  "priceInCents": 150,
                  "description": "Classic chocolate chip cookies with a perfect balance of sweet and chocolatey."
                },
                {
                  "name": "biscotti",
                  "id": "9lzu",
                  "priceInCents": 150,
                  "description": "Crunchy Italian biscotti, perfect for dipping in coffee or tea."
                }
            ]
            const input2 = "Ab23"
            const actual = show(input1, input2)
            const expected = undefined
            expect(actual).toEqual(expected)
        })
    })

    describe("update", ()=>{
        it("should update the cookie that matches the given id with the details of the given cookie name", ()=>{
            const input1 = 
            [
                {
                  "name": "chocolate chip",
                  "id": "Ffsu",
                  "priceInCents": 150,
                  "description": "Classic chocolate chip cookies with a perfect balance of sweet and chocolatey."
                },
                {
                  "name": "biscotti",
                  "id": "9lzu",
                  "priceInCents": 150,
                  "description": "Crunchy Italian biscotti, perfect for dipping in coffee or tea."
                }
            ]
            const input2 = "Ffsu"
            const input3 = "oatmeal raisin"
            const actual = update(input1, input2, input3)
            const expected = [
                {
                  "name": "oatmeal raisin",
                  "id": "Ffsu",
                  "priceInCents": 120,
                  "description": "Chewy oatmeal cookies with plump raisins for a delightful texture and flavor."
                },
                {
                "name": "biscotti",
                "id": "9lzu",
                "priceInCents": 150,
                "description": "Crunchy Italian biscotti, perfect for dipping in coffee or tea."
                }
            ]
            expect(actual).toEqual(expected)
        })

        it("should return the original array if cookie id does not match", ()=>{
            const input1 = 
            [
                {
                  "name": "chocolate chip",
                  "id": "Ffsu",
                  "priceInCents": 150,
                  "description": "Classic chocolate chip cookies with a perfect balance of sweet and chocolatey."
                },
                {
                  "name": "biscotti",
                  "id": "9lzu",
                  "priceInCents": 150,
                  "description": "Crunchy Italian biscotti, perfect for dipping in coffee or tea."
                }
            ]
            const input2 = "Ab23"
            const input3 = "oatmeal raisin"
            const actual = update(input1, input2, input3)
            const expected = [
                {
                  "name": "chocolate chip",
                  "id": "Ffsu",
                  "priceInCents": 150,
                  "description": "Classic chocolate chip cookies with a perfect balance of sweet and chocolatey."
                },
                {
                  "name": "biscotti",
                  "id": "9lzu",
                  "priceInCents": 150,
                  "description": "Crunchy Italian biscotti, perfect for dipping in coffee or tea."
                }
            ]
            expect(actual).toEqual(expected)
        })

        it("should return the original array if updated cookie name does not match", ()=>{
            const input1 = 
            [
                {
                  "name": "chocolate chip",
                  "id": "Ffsu",
                  "priceInCents": 150,
                  "description": "Classic chocolate chip cookies with a perfect balance of sweet and chocolatey."
                },
                {
                  "name": "biscotti",
                  "id": "9lzu",
                  "priceInCents": 150,
                  "description": "Crunchy Italian biscotti, perfect for dipping in coffee or tea."
                }
            ]
            const input2 = "9lzu"
            const input3 = "banana creme"
            const actual = update(input1, input2, input3)
            const expected = [
                {
                  "name": "chocolate chip",
                  "id": "Ffsu",
                  "priceInCents": 150,
                  "description": "Classic chocolate chip cookies with a perfect balance of sweet and chocolatey."
                },
                {
                  "name": "biscotti",
                  "id": "9lzu",
                  "priceInCents": 150,
                  "description": "Crunchy Italian biscotti, perfect for dipping in coffee or tea."
                }
            ]
            expect(actual).toEqual(expected)
        })

    })

    describe("destroy", ()=>{
        it("should delete all cookies from the array", ()=>{
            const input1 = [
                {
                  "name": "chocolate chip",
                  "id": "Ffsu",
                  "priceInCents": 150,
                  "description": "Classic chocolate chip cookies with a perfect balance of sweet and chocolatey."
                },
                {
                  "name": "biscotti",
                  "id": "9lzu",
                  "priceInCents": 150,
                  "description": "Crunchy Italian biscotti, perfect for dipping in coffee or tea."
                }
            ]
            const input2 = "all"
            const actual = destroy(input1, input2)
            const expected = []
            expect(actual).toEqual(expected)
        })

        it("should delete the cookie object with the matching id", ()=>{
            const input1 = [
                {
                  "name": "chocolate chip",
                  "id": "Ffsu",
                  "priceInCents": 150,
                  "description": "Classic chocolate chip cookies with a perfect balance of sweet and chocolatey."
                },
                {
                  "name": "biscotti",
                  "id": "9lzu",
                  "priceInCents": 150,
                  "description": "Crunchy Italian biscotti, perfect for dipping in coffee or tea."
                }
            ]
            const input2 = "9lzu"
            const actual = destroy(input1, input2)
            const expected = [
                {
                    "name": "chocolate chip",
                    "id": "Ffsu",
                    "priceInCents": 150,
                    "description": "Classic chocolate chip cookies with a perfect balance of sweet and chocolatey."
                  },
            ]
            expect(actual).toEqual(expected)
        })

        it("should return the original array if cookie id does not match any cookie object in the array", ()=>{
            const input1 = [
                {
                  "name": "chocolate chip",
                  "id": "Ffsu",
                  "priceInCents": 150,
                  "description": "Classic chocolate chip cookies with a perfect balance of sweet and chocolatey."
                },
                {
                  "name": "biscotti",
                  "id": "9lzu",
                  "priceInCents": 150,
                  "description": "Crunchy Italian biscotti, perfect for dipping in coffee or tea."
                }
            ]
            const input2 = "Ac45"
            const actual = destroy(input1, input2)
            const expected = [
                {
                  "name": "chocolate chip",
                  "id": "Ffsu",
                  "priceInCents": 150,
                  "description": "Classic chocolate chip cookies with a perfect balance of sweet and chocolatey."
                },
                {
                  "name": "biscotti",
                  "id": "9lzu",
                  "priceInCents": 150,
                  "description": "Crunchy Italian biscotti, perfect for dipping in coffee or tea."
                }
            ]
            expect(actual).toEqual(expected)
        })
    })

    describe("total", ()=>{
        it("should return formatted list of cookies with the total cost.", ()=>{
            const input = [
                {
                  "name": "chocolate chip",
                  "id": "Ffsu",
                  "priceInCents": 150,
                  "description": "Classic chocolate chip cookies with a perfect balance of sweet and chocolatey."
                },
                {
                  "name": "biscotti",
                  "id": "9lzu",
                  "priceInCents": 150,
                  "description": "Crunchy Italian biscotti, perfect for dipping in coffee or tea."
                }
            ]
            const actual = total(input)
            const expected = 
            "chocolate chip $1.50\n" +
            "biscotti $1.50\n" +
            "(2 items) Total: $3.00"
            expect(actual).toEqual(expected)
        })

        it("should return $0.00 if cart is empty", ()=>{
            const input = []
            const actual = total(input)
            const expected = "\n(0 items) Total: $0.00"
            expect(actual).toBe(expected)
        })
    })


})
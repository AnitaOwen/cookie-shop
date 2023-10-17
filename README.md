
![Image of a variety of cookies](https://images.squarespace-cdn.com/content/v1/559d9ae6e4b07f54795d8c45/1451952277941-4KP8BNVRTVNP3YLV9TAO/photo_top_cookiegroupshot.jpg?format=2500w)


# <img src="https://cur.glitter-graphics.net/pub/3580/3580618qyqm9ip4ie.gif" width="35" height="35"> Cookie Shop Application  <img src="https://cur.glitter-graphics.net/pub/3580/3580618qyqm9ip4ie.gif" width="35" height="35">



Welcome to the Cookie Shop Application, a simple yet powerful tool for managing and enjoying your favorite cookies. This application provides essential features for running a cookie shop, allowing users to create, view, update, and delete items in the cart, along with other helpful functions.

 ## Requirements <img src="https://media0.giphy.com/media/K9Xy6osm73DbxIa8f2/giphy.gif?cid=6c09b952qg1tcqr51e9jkl313ni0240m5t4dpstc5shxvtt0&ep=v1_stickers_related&rid=giphy.gif&ct=s" width="35" height="35">
Before you get started with the Cookie Shop Application, make sure you have the following requirements in place:

- **Node.js**: The application is built using Node.js, so you need to have Node.js installed on your system. You can download and install Node.js from [nodejs.org](https://nodejs.org/). We recommend using a stable version.

- **npm (Node Package Manager)**: npm is bundled with Node.js, so you should have it installed automatically when you install Node.js. You can check if npm is installed by running the following command:

  ```
  npm -v
  ```
If you don't have npm installed, you can download and install it from the official website: [npmjs.com](https://npmjs.com/).



##  Getting Started <img src="https://media0.giphy.com/media/fucmgg19z3JXs9o1EL/giphy.gif?cid=6c09b952lvf1ieurrjet8m68l57gx9geynl463kb2450bo1r&ep=v1_stickers_related&rid=giphy.gif&ct=s" width="35" height="35">

To get started with the Cookie Shop Application, you need to set up your development environment, install the necessary dependencies, and configure your data storage.

1. Fork and clone this repo to your desktop.
2. Go to its root directory and run `npm install` to install all dependencies.

 ```
 npm install
 ```


## Features <img src="https://media.tenor.com/dY8ZlGuoD0QAAAAj/angel-angel-cookie.gif" width="38" height="38">

### *Create*
- A user can create an item and add it to the cart.
- Each created item is assigned a unique ID, ensuring accurate identification and management.
- Cookie names are not case sensitive, but spaces do matter!

>Use `npm run create <cookie-name>` to add a new item to the cart
```
npm run create "chocolate chip"
npm run create "oatmeal raisin"
npm run create "vanilla creme"
```
>***Note:*** `npm run show menu` will show a list of available cookies to choose from.


### *Index*
- A user can see a list of all items added to the cart, displaying the following information:
  - ID
  - Name
  - Price in dollars

>Use `npm run index` to show a list of all items added to the cart.
```
npm run index
```

### *Show*
- A user can see the details of a specific item by its unique ID.
- Cookie ids __are__ case sensitive.
>Use `npm run show <cookie-id>` to show details of an added cart item
```
npm run show yFr7
npm run show z4Mx
```
>**Note:** `npm run index` will show a list of all items in the cart along with their unique ids.

### *Show Menu*
- Users can access a list of all menu items, including their prices.
- This feature helps customers explore the available cookie options easily.

>Use `npm run show menu` to show a list of all available cookies to choose from.
``` 
npm run show menu
```


### *Show Vegan*
- Users can view a list of all vegan cookies available in the menu along with their prices.
>Use `npm run show vegan` to show a list of all available vegan cookies to choose from.
``` 
npm run show vegan
```


### *Show Nut-Free*
- A list of all nut-free cookies from the menu is displayed, complete with their prices.
>Use `npm run show nutfree` to show a list of all available nut-free cookies to choose from.
``` 
npm run show nutfree
```

### *Update*
- A user can update the details of an item in the cart, ensuring accurate and personalized information.
- Cookie names are not case sensitive, but spaces do matter!
- Cookie ids __are__ case sensitive.
>Use `npm run update <cookie-id> <updated-cookie-name>` to change a current cart item to be a different item. 
```
npm run update yFr7 "chocolate chip"
```
This will update the cart item to have the details of "chocolate chip", while keeping the id the same.

```
npm run update z4Mx "oatmeal raisin"
```
This will update the cart item to have the details of "oatmeal raisin", while keeping the id the same.

>**Note:** `npm run index` will show a list of all items in the cart along with their unique ids.


### *Destroy All*
- Users have the option to delete all items from the cart, providing a fresh start.
>Use `npm run destroy all` to empty the cart.
```
npm run destroy all
```


### *Destroy*
- Users can delete a specific item from the cart by providing its unique ID.
- Cookie ids __are__ case sensitive.
>Use `npm run destroy <cookie-id>` to remove a specific item from the cart.
```
npm run destroy yFr7 
```
This will remove the item with the matching cookie id from the cart. 
>**Note:** `npm run index` will show a list of all items in the cart along with their unique ids.


### *Total*
- Users can view the total cost of all items added to the cart, helping them keep track of their expenses.
>Use `npm run total` to get a list off all items in the cart and their prices, along with a total cost in dollars.
```
npm run total
```

## Testing <img src="https://media2.giphy.com/media/BvxLxl6JkeNCwAP8xJ/giphy.gif?cid=6c09b9521m1rujwstgwnsh4ggibv85qo2d1wit3tcww2hzha&ep=v1_stickers_related&rid=giphy.gif&ct=s" width="45" height="45">

The Cookie Shop Application includes unit tests to ensure its functionality remains consistent and reliable. We use [Jest](https://jestjs.io/) for testing. Below are the commands for running tests and additional information:

### *Running Tests*

To run the tests, follow these steps:

1. If you haven't already, make sure you have all the necessary dependencies installed by running:
```
npm install
```
2. Run the test suite using the following command:
```
npm run test
```

### *Writing Tests*
If you want to contribute to the project or modify existing functionality, you should also write tests for your code. We follow best practices for testing, and here are a few guidelines:

- Place your test files in the `__tests__` directory within the project.

- Use Jest's testing functions, such as `describe`, `it`, and `expect`, to structure and write your tests.

- Make sure your test names are descriptive and indicate the behavior you're testing.

- Test both positive and negative scenarios to cover a wide range of use cases.

### *Coverage*
After running the tests, Jest will generate a code coverage report. You can find this report in the coverage directory. It provides insights into which parts of the code are covered by tests and which parts need more attention.


## Contributing <img src="https://media.giphy.com/media/MuC8h6BkWBgRxN7zcG/source.gif" width="45" height="45">

We welcome contributions to the Cookie Shop Application. If you have ideas for improvements or want to report issues, please open a GitHub issue and submit a pull request.

<img src="https://i.pinimg.com/originals/92/cf/ae/92cfae9031754fbb5f97e53d218da29d.gif" width="185" height="150">

Happy cookie shopping!

![Cute gif of a cartoon character eating a cookie](https://media.tenor.com/zluE5zNOkOkAAAAC/cute-eating.gif)


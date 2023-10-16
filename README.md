
# Cookie Shop Application

Welcome to the Cookie Shop Application, a simple yet powerful tool for managing and enjoying your favorite cookies. This application provides essential features for running a cookie shop, allowing users to create, view, update, and delete items in the cart, along with other helpful functions.

## Getting Started

To get started with the Cookie Shop Application, you need to set up your development environment, install the necessary dependencies, and configure your data storage.

1. Clone the repository to your local machine.
2. Install the required dependencies using `npm install nanoid@3`.
3. Configure your data storage settings for proper data management.


## Features

### Create
- A user can create an item and add it to the cart.
- Each created item is assigned a unique ID, ensuring accurate identification and management.
- Cookie names are case insensitive, but spaces do matter!

>Use `npm run create <cookie-name>` to add a new item to the cart
```
npm run create "chocolate chip"
npm run create "oatmeal raisin"
npm run create "vanilla creme"
```
>***Note:*** `npm run show menu` will show a list of available cookies to choose from.


### Index
- A user can see a list of all items added to the cart, displaying the following information:
  - ID
  - Name
  - Price in dollars

>Use `npm run index` to show a list of all items added to the cart.
```
npm run index
```

### Show
- A user can see the details of a specific item by its unique ID.
>Use `npm run show <cookie-id>` to show details of an added cart item
```
npm run show yFr7
npm run show z4Mx
```
>***Note:*** `npm run index` will show a list of all items in the cart along with their unique ids.

### Show Menu
- Users can access a list of all menu items, including their prices.
- This feature helps customers explore the available cookie options easily.

>Use `npm run show menu` to show a list of all available cookies to choose from.
``` 
npm run show menu
```


### Show Vegan
- Users can view a list of all vegan cookies available in the menu along with their prices.
>Use `npm run show vegan` to show a list of all available vegan cookies to choose from.
``` 
npm run show vegan
```


### Show Nut-Free
- A list of all nut-free cookies from the menu is displayed, complete with their prices.
>Use `npm run show nutfree` to show a list of all available nut-free cookies to choose from.
``` 
npm run show nutfree
```

### Update
- A user can update the details of an item in the cart, ensuring accurate and personalized information.
- Cookie names are case insensitive, but spaces do matter!
>Use `npm run update <cookie-id> <updated-cookie-name>` to change a current cart item to be a different item. 
- 
```
npm run update yFr7 "chocolate chip"
```
This will update the cart item to have the details of "chocolate chip", while keeping the id the same.

```
npm run update z4Mx "oatmeal raisin"
```
This will update the cart item to have the details of "oatmeal raisin", while keeping the id the same.

>***Note:*** `npm run index` will show a list of all items in the cart along with their unique ids.


### Destroy All
- Users have the option to delete all items from the cart, providing a fresh start.
>Use `npm run destroy all` to empty the cart.
```
npm run destroy all
```


### Destroy <ID>
- Users can delete a specific item from the cart by providing its unique ID.
>Use `npm run destroy <cookie-id>` to remove a specific item from the cart.
```
npm run destroy yFr7 
```
This will remove the item with the matching cookie id from the cart. 
>***Note:*** `npm run index` will show a list of all items in the cart along with their unique ids.


### Total
- Users can view the total cost of all items added to the cart, helping them keep track of their expenses.
>Use `npm run total` to get a list off all items in the cart and their prices, along with a total cost in dollars.
```
npm run total
```

## Contributing

We welcome contributions to the Cookie Shop Application. If you have ideas for improvements or want to report issues, please open a GitHub issue and submit a pull request.


Happy cookie shopping!

![Image of a variety of cookies](https://images.squarespace-cdn.com/content/v1/559d9ae6e4b07f54795d8c45/1451952277941-4KP8BNVRTVNP3YLV9TAO/photo_top_cookiegroupshot.jpg?format=2500w)

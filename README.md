create
A user can create a new item / add item to the cart
When a user creates an item a unique id is assigned to the new item.

index
A user can see a list of all the items added to the cart 
id, name, price in dollars


show
A user can see the details of one item by their ID

show menu
user can see a list of all the menu items and their prices

show vegan
user can see a list of all vegan cookies and their prices

show nutfree
user can see a list of all nut-free cookies and their prices

update
A user can update an item.

When a user performs an action like creating or deleting an item, the data file is updated correctly. If the JSON is malformed, there is some logic to prevent writing to the file and thus corrupting the data file.


destroy all
user can delete all items from the cart

destroy <id>
user can delete an item from the cart using the id

total 
user can see a total of all items added to the cart


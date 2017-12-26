# Product Listing Management

This is a web application using MEAN stack. It supports CRUD operations for product listings and also provides searching, filtering, and sorting of listings.

## Steps to run the app

```
git clone https://github.com/weixiaokulou/ProductListingManagement.git
cd ProductListingManagement
npm install -g express
```
Install nodemon so we don't have to refresh manually:
```
npm install -g nodemon
```
Start the server:
```
node app.js
```
or
```
nodemon app.js
```
Open browser and enter `http://localhost:3000`

## Frond-End: (AngularJS, Bootstrap)

The client side (front-end) code is under `client/` folder. `client/index.html` is the main page and `client/app.js` defines routing of the application.
Partial views are defined under `views/ folder`, including the views for different routes.
Controllers are created in `controllers/item.js` dealing with logic between views and back-end services.

### UI operations

* **Search** Main page shows product listings and user can search with keywords and search results will be displayed below.

* **Filter** This is pure front-end, it takes the input to filter the item list by all fields.

* **Sort** This is also pure front-end, user can sort items by title, rating, and price. The sorting can be applied after searching.

* **Add item** The **Add Item** button is on the upright corner of the main page. After clicking the button, an edit page will be open, and user can put item infomation there. After the item is added, it will redirect to main page.

* **Check item details** By clicking the **View Details** button in each item’s block, we can check the details of this item.

* **Update item** The **update item** function can be found in each item’s detail page by click the **edit** button.

* **Delete item** By clicking the “delete” button in item’s detail page, we can delete this item.

## Back-End: (Express, Node.js, MongoDB)
The server side (back-end) code includes the entry point `app.js` and database `models/`.

`app.js` defines APIs for getting, creating, updating, deleting and searching listings:

### service APIs:
```
GET /api/items

get all items
```
```
GET /api/items/:_id

get item with it's id
```
```
GET /api/items/list/:_title

search item by title key word
```
```
POST /api/items
{
    "title": "test",
    "condition": "used",
    "rating": 3.5,
    "price": 1,
    "category": "glass",
    "details": "ok",
    "imgUrl": "default.jpg"
}

create new item with item object
```
```
PUT /api/items/:_id
{
    "title": "test",
    "condition": "used",
    "rating": 3.5,
    "price": 1,
    "category": "glass",
    "details": "ok",
    "imgUrl": "default.jpg"
}

update item by id with new item object
```
```
DELETE /api/items/:_id

delete item with id
```
the `models/item.js` uses mongoose for mongodb object modeling for Node.js, and service APIs call corresponding functions to interact with MongoDB.

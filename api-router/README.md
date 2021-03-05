## Assignment: API and Router

The purpose of this assignment is to demonstrate the understanding of React Router, API Integration.

### Task

Requirements:

There should be multiple pages:

1. Home
2. Product details
3. Create Product
4. 404

All the data will come from API. API documentation link: https://fakestoreapi.com/docs

Deliverable:

1. On top of the application, there will be a navigation which can be accessible from any page. There will be link for Home, Create Products

2. In home page, there will be the listing of all the product. Each and every products will be clickable.

3. When ever the user click one of the products, the user will be redirected to the details page of the product. In detail page, the data of the product will come from API> https://fakestoreapi.com/products/{product-id}

4. On Create Prodcuts page, Add forms for creating product with all the information required for the create product API mentioned in the API doc.

5. On Product details page, there will be an edit button, it will take user to a page where user can update the product information. The page design will be same as product create, But all the fields will be pre filled with existing information.

6. As before, there will be loader for each page. This time, the loader will hide when API communication is done.

7. 404 page will work as before.

### Questions:

- How to differentiate between `product/:id` and `product/create` with moving `product/:id` at the bottom?(`App.js` line:26)

- Is setting global variable outside component a good practice? (`ProductCreate.jsx` line:5)

# Nested Routing with Index Attribute (Declarative Routing)

In declarative routing, nested routes allow rendering child components inside a parent component using `<Outlet />`.

## Index Attribute

The index attribute is used to define a default child route.
It is rendered when the parent route path is matched but no specific child route is provided.

Example:

```
<Route path="/products" element={<Products />}>
  <Route index element={<ProductList />} />
  <Route path=":id" element={<ProductDetail />} />
</Route>
```

Explanation:

- When user visits /products → ProductList will render (because of index)
- When user visits /products/1 → ProductDetail will render

Key Points:

- index route does not have a path
- It works as the default child route
- It must be used inside a parent route
- Parent component must include `<Outlet />` to render child routes

## Introduction to Data Routing

Data Routing is a feature in React Router that handles data fetching and data updates at the route level instead of inside components.

Purpose:

- To fetch data before rendering the component
- To improve performance and user experience
- To organize data logic with routes

Traditional Approach Problem:

- Data is fetched inside components using useEffect
- Component renders first, then data loads
- Causes delay and loading states

Data Routing Approach:

- Data is fetched before the component renders
- Cleaner and more structured code

## Basic Concepts (Only Introduction Covered)

### Loader

A function used to fetch data for a route
Runs before the component is rendered

### Action

A function used to handle form submissions or data changes (like POST, DELETE)
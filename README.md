# E-Commerce-app

# How to run it
1. Clone the repo
2. run "npm i" in your vs code terminal
3. once node modules are installed run "npm start"

# Design Choices and Implementation Overview
**Component Library**: For the component library, I chose Material-UI. It provides a clean and modern design, along with a wide range of customizable components. Its detailed documentation made it easy to implement and get up to speed with the library.

**State Management**: To handle the state of the application, especially for the cart, I used Redux. It helps manage complex state changes in a predictable way, and is a good fit for applications that require centralized state management.

**Persistence**: I integrated redux-persist to ensure that the cart data persists even after page reloads. By whitelisting the cart reducer, I store the cart selections in localStorage, so users don’t lose their cart items if they refresh or navigate away from the page.

**Animations**: To enhance the user experience, I used Framer Motion to add smooth animations to the product cards. This creates a more dynamic and engaging interface, making interactions feel more polished.

**Cart View**: The cart is displayed using a Drawer component, which provides a clean, responsive side panel for users to view and modify their cart. I also used React-Toastify to show snack bar notifications for actions like adding or removing items, giving users clear feedback on their interactions.

**API Data Fetching**: For fetching data from the API, I created a small custom hook with Axios. This allows me to reuse the data-fetching logic throughout the app, keeping the codebase clean and modular.

**Overall Design**: My goal with the design was to keep things simple and intuitive. The folder structure follows best practices for scalability, and I focused on creating reusable components to ensure that the code is maintainable in the long run.

# Below Please find the screenshots of the running code
1. Landing Page
![image](https://github.com/user-attachments/assets/5689a9a8-098e-4068-980e-0ca3abf26bb0)

2. Empty Cart View
![image](https://github.com/user-attachments/assets/0a24ebce-7b35-4bc7-8d32-fc2413556330)

3. Product Addition notification
![image](https://github.com/user-attachments/assets/ac8765ad-612e-4848-8cf4-1b78e4a2c25c)

4. Cart Badge - Number of products in the cart
![image](https://github.com/user-attachments/assets/42f54726-d0a9-48a8-8528-e744aab44db1)

5. Cart View
![image](https://github.com/user-attachments/assets/f2e08968-9586-4915-a7d7-4b2915d4cdad)

6. Search Functionality
![image](https://github.com/user-attachments/assets/2999ce85-36b6-4e10-beab-af4286e9fc7e)

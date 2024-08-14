# CookBox_App

## Project Purpose

The CookBox App is a recipe application that allows users to `search for recipes by name and category`. After logging in, users can input the name of the recipe and select a category to receive `detailed information including ingredients, calorie values, and images of the recipes`. The primary objectives of this project are to improve skills in using `Styled Components for styling`, `manage state with Context API`, and `handle routing and data fetching with React`.

## Project Structure

```
|--CookBox_App(folder)
|
├── public
│     └── index.html
├── src
│    ├── assets
│    │       └──  [images]
│    │
│    ├── components
│    │        └── style (folder)
│    │              ├── AboutBoxStyle.jsx
│    │              ├── ButtonStyle.jsx
│    │              ├── ContainerStyle.jsx
│    │              ├── DetailsBoxStyle.jsx
│    │              ├── LoginBoxStyle.jsx
│    │              ├── LogoStyle.jsx
│    │              ├── NavbarStyle.jsx
│    │              ├── SearchBoxStyle.jsx
│    │              ├── SearchResultStyle.jsx
│    │              └── WelcomeHeaderStyle.jsx
│    │       ├── AboutBox.jsx
│    │       ├── Button.jsx
│    │       ├── DetailsBox.jsx
│    │       ├── Header.jsx
│    │       ├── LoginBox.jsx
│    │       ├── Navbar.jsx
│    │       ├── SearchBox.jsx
│    │       ├── SearchItem.jsx
│    │       └── SearchResult.jsx
│    ├── contexts
│    │       ├── AuthProvider.jsx
│    │       └── RecipesProvider.jsx
│    ├── pages
│    │       ├── Home.jsx
│    │       ├── About.jsx
│    │       ├── Details.jsx
│    │       ├── Login.jsx
│    │       └── Search.jsx
│    ├── router
│    │       └── AppRouter.jsx
│    ├── App.js
│    ├── index.js
│    └── index.css
│
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

## Project Features

- **User Authentication**: `Fake login system implemented using Context API`. Users must log in to view recipes; unauthorized users are redirected to the login page.
- **Recipe Search and Filtering**: Users can search for recipes by name and category. The application fetches data from `the Edamam API using Axios`.
- **Recipe Details**: For each recipe, users can view the ingredients, calorie values, and images.
- **Styled Components**: `All styling is managed using Styled Components for a modular and maintainable design`.
- **State Management**: `Context API` is used to manage the authentication state and recipe data across the application.
- **Routing**: `React Router` is used for navigation between different pages. `useNavigate` and `useLocation` are used for programmatic navigation and accessing route information.

## Outcome

## Technologies Used

- **ReactJS**: For building the user interface. Key React features include:
  - **useState**: For managing local component state.
  - **useNavigate** and **useLocation**: For navigation and accessing route information.
- **Styled Components**: For styling the application with modular, component-scoped styles.
- **Context API**: Used for state management, including authentication and recipe data.
- **Axios**: For making HTTP requests to the Edamam API.
- **React Router**: For routing and navigation within the application.
- **Local Storage**: Used to persist user authentication state and data, ensuring that login/logout status and user information are retained even after page refreshes.
- **API**: Data is fetched from the Edamam API using the following endpoint:
  - [Edamam Recipe API](https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal})

### At the end of the project, will be able to;

This project has significantly enhanced my skills in several key areas. By developing the "CookBox App", I have gained practical experience in:

- Using **Styled Components** for effective and modular styling in React applications.
- Managing global and component-level state with **Context API**.
- Implementing **authentication** and **authorization** mechanisms in a React app.
- Handling **routing** and **navigation** with React Router, including programmatic navigation.
- Fetching and handling data from APIs using **Axios** and incorporating it into the application.

These skills are essential for developing complex and feature-rich React applications in the future.

<p align="center"> 📝 Happy Coding! 🍴 </p>

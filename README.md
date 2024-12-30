
# Pet Adoption
We are Using the Mern Stack For this Project this Includes Mysql,Express,React JS and Node Js


# React-Vite Application

This is a modern React application bootstrapped with Vite, a fast build tool for front-end development. This README will guide you through cloning the repository, setting up the environment, and running the application locally.

---

## Features
- ⚡ **Vite** for lightning-fast builds.
- 📦 **React** for building a responsive UI.
- 🎨 Styled with Tailwind CSS or libraries.
- 🔧 Ready for development and production builds.

---

## Prerequisites
Make sure you have the following installed on your system:
- **Node.js** (v18 or later)
- **npm**
- **Git**

---

## Getting Started for FrontEnd

### 1. Clone the Repository
To get a copy of this project on your local machine, use the following command:
```bash
git clone https://github.com/Brammash23/PetCare.git
```

### 2.Navigate the directory
Navigate the correct Directory to Run this app
```bash
cd PetCare
```

### 3.Install Dependencies
Install the Required Dependencies from  NPM
```bash
npm install
```

### 4.Run Development Server
Run the Server in the Correct Repository
```bash
npm run-dev
```
### 5.Project Structure for FrontEnd
```bash
├── public/             # Static Images
├── src/
│   ├── components/     # Reusable components like Header,Footer,Login Etc....
│   ├── App.jsx         # Main application component
│   ├── Home.jsx         # For Home page Route sthe Other Components
│   └── main.jsx        # Entry point for React
│   └── pets.jsx        # Many Other Components Stored in this src
│   └── aboutus.jsx        # About us
│   └── contact.jsx        # Many Other Components Stored in this src       
├── .gitignore          # Git ignore file
├── package.json        # Project metadata and scripts
├── vite.config.js      # Vite configuration
├── tailwind.config.js      #Tailwind Config
├── postcss.config.js      # Post css configuration
└── README.md           # Project documentation
```

### 6.Packages
```bash
| Dependency           | Version   | Description                                                   |
|----------------------|-----------|---------------------------------------------------------------|
| `axios`              | ^1.7.9    | Promise-based HTTP client for making API requests.            |
| `emailjs-com`        | ^3.2.0    | Library for sending emails directly from the client-side.      |
| `react`              | ^18.3.1   | JavaScript library for building user interfaces.               |
| `react-dom`          | ^18.3.1   | Entry point for React to interact with the DOM.                |
| `react-icons`        | ^5.4.0    | Library for using icons in React applications.                 |
| `react-router-dom`   | ^7.1.1    | Declarative routing for React applications.                    |
| `react-toastify`     | ^11.0.2   | Library for displaying toast notifications in React apps.       |
```
---

## Getting Started for BackEnd

### 1. Clone the Repository
To get a copy of this project on your local machine, use the following command:
```bash
git clone https://github.com/Brammash23/Backend.git
```

### 2.Install Dependencies
Install the Required Dependencies from  NPM
```bash
npm init
```

### 3.Run Development Server
Run the Server in the Correct Repository
```bash
node server.js //
nodemon server.js
```

### 4.Project Structure
```bash
├── Backend
│   ├── Node Modules        # It COntains All the Packages installed for this server.
│   ├── index.js            # Contains the Challenge Sample code for mail to user after submission
│   ├── server.js           # Everything related about backend,adatabse connectivity
│   └── uploads             # It contains images and git attributes
│   └── package.lock.json   #
│   └── package.json        # Noted the Version of all Npm Packages 
```

### 5.Packages
These are the Packages Included and installed in this project
```bash
| Dependency            | Version   | Description                                  |
|-----------------------|-----------|----------------------------------------------|
| `body-parser`         | ^1.20.3   | Middleware for parsing incoming request bodies. |
| `cookie-parser`       | ^1.4.7    | Middleware for parsing cookies.              |
| `cors`                | ^2.8.5    | Middleware for enabling Cross-Origin Resource Sharing. |
| `emailjs-com`         | ^3.2.0    | Library for sending emails through JavaScript. |
| `express`             | ^4.21.2   | Web framework for Node.js.                   |
| `express-session`     | ^1.18.1   | Middleware for managing session data.        |
| `json-web-token`      | ^3.2.0    | Library for handling JSON Web Tokens.        |
| `jsonwebtoken`        | ^9.0.2    | Another library for managing JSON Web Tokens. |
| `multer`              | ^1.4.5-lts.1 | Middleware for handling file uploads.      |
| `mysql`               | ^2.18.1   | MySQL client for Node.js.                    |
| `node-localstorage`   | ^3.0.5    | LocalStorage implementation for Node.js.     |
| `node-mailer`         | ^0.1.1    | Library for sending emails (deprecated).     |
| `nodemailer`          | ^6.9.16   | Powerful email-sending library.              |
| `nodemon`             | ^3.1.9    | Utility for automatically restarting Node.js applications. |
| `uuid`                | ^11.0.3   | Library for generating unique IDs.           |

```


# Our Project Description and Features
It includes the following:
- Backend API with Express & Mysql
- Routes for auth, logout, register, profile
- Protected routes and endpoints
- Custom middleware
- Custom error middleware
- React frontend to register, login, logout, view profile
- React Tailwind css
- Axios API







## User Interface and Design

-We followed the Given Design given by the Team
-We change some textures in color also mobile responsive

## Backend and Database
-In our Project Database and Server Plays an Major Role in our Website
-Manages User State
-Gets Info about Pets from Database
-Manage the Pets List after adoption
-Shows the list of Pets and Adoption History
-Sends the Mail to the User After Submission

## Well Structured Code

-Maintain Indidual Components For Particular Section
-Use CamelCase for Readabiltiy
-Use Some Seperate Folders to Identify
-Need and Well Exceuted Code


## Git 

-It Manitains Control,versions of code
-We can managed the versions of code

## Bonus Challenge
-Sends an Enail to the User to Confirm About their Adoption
-Admin Space by Route /main to Add pets on our own




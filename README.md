# Blogify_Fullstack_Project

Welcome to the GitHub repository for the Mega Blog App! This repository contains the source code for a blogging platform equipped with essential features like user authentication, post management, and content creation. It utilizes Appwrite as the backend service for managing the database and storage operations.

## Introduction

Mega Blog is a full-fledged blog application built with React.js that offers the following features:

- **User Management:**

  - Users can register for new accounts using a signup form with validation (powered by React Hook Form).

  - Existing users can log in securely using Appwrite for authentication.

  - Users can log out seamlessly, clearing authentication tokens.

- **Post Creation:**

  - Authorized users can create new blog posts, crafting content with ease using a rich text editor (TinyMCE).

  - Post data is stored securely in Appwrite's database.

- **Post Listing:**
  - A clear and organized list displays all published blog posts.
  - Each post showcases the title, author, and a snippet of the content.
  - Consider implementing pagination or sorting for extensive post management (optional).
- **Update Post:**

  - Users can update their existing post if the same user that is Logged in and have their own post.
  - User can also delete their own post.

- **Route Management:**
  - The application leverages react-router-dom for efficient routing between different sections.
  - Specific routes handle authentication (login, logout), post creation, and post listing.

## Tech Stack

- **Frontend:** React.js
- **Form Handling:** React Hook Form
- **Rich Text Editor:** TinyMCE.
- **State Management:** Redux with react-redux
- **Routing:** react-router-dom
- **Backend:** Appwrite (for database, storage, and authentication) and you can use firebase etc.

## Deployment & Repository

- **Live Demo:**

  

- **Repository:**
https://github.com/AVISHKAR1711/Blogify_Fullstack_Project
 


  ## Installation

### Clone the repository:

    git clone https://github.com/code-with-divyanshu/MegaBlog_App

### Navigate to the project directory:

    cd mega-blog

### Install dependencies:

    npm install

### Running the Development Server :

    npm run dev

### Access the application in your browser at

    http://localhost:5173`

(or the port specified in package.json).

### For deploy and Build application:

    npm run build

### Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## Disclaimer

The information provided here serves as a starting point for understanding the Mega Blog app. While explanations are clear, it's recommended to explore the code itself for the most comprehensive grasp of implementation details.

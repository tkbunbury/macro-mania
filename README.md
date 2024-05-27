# Macro Mania

## Introduction

Macro Mania is a video-sharing mobile application designed to promote healthy eating by encouraging users to post videos of their nutritious home-cooked meals along with the ingredients used. This app aims to help users control the ingredients they consume by eating out less and cooking more at home. Friends and families can share their culinary creations, inspiring each other to make healthier food choices.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Design Choices](#design-choices)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **User Authentication**: Secure sign-up and login functionality using Appwrite.
- **Video Posting**: Users can post videos of their home-cooked meals along with the ingredients used.
- **Homepage**: Displays posts from different users and highlights the latest posts.
- **Profile Management**: Users can view and manage their own posts on their profile page.
- **Search Functionality**: Allows users to search for specific meals or ingredients.
- **Trending Section**: View trending meal videos and get inspired by others.

## Technologies Used

- **React Native**: For building the mobile application.
- **Expo**: To streamline development and deployment.
- **Appwrite**: Backend as a Service (BaaS) for user authentication, database management, and file storage.
- **JavaScript**: The primary programming language for the application.
- **Tailwind CSS**: For styling components with a utility-first approach.

## Installation

To set up the Macro Mania project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/tkbunbury/macro-mania.git
    cd macro-mania
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up Appwrite**:
    - Create a new project in Appwrite.
    - Configure your Appwrite project with the necessary collections and storage buckets.
    - Update the `config.js` file with your Appwrite project details.

4. **Start the development server**:
    ```bash
    npm start
    ```

5. **Run on a mobile device or simulator**:
    - Use the Expo Go app to scan the QR code and run the application on your device.
    - Alternatively, use an Android or iOS simulator.

## Usage

1. **Sign Up**: Create a new account or log in with existing credentials.
2. **Post a Meal**: Upload a video of your home-cooked meal and add the ingredients used.
3. **View Homepage**: Browse posts from different users and see the latest meal videos.
4. **Search**: Use the search functionality to find specific meals or ingredients.
5. **Profile Management**: Update your personal information and view your posted meal videos.
6. **Trending Section**: Explore trending meal videos for inspiration.

## File Structure

Here is an overview of the key files and directories in the project:

- **/components**: Contains reusable UI components such as `FormField`, `CustomButton`, `VideoCard`, `Trending`, etc.
- **/constants**: Contains constant values and assets like images and color schemes.
- **/context**: Contains the global context provider for managing user state.
- **/lib**: Contains utility functions and hooks for interacting with Appwrite.
- **/screens**: Contains the main screen components for different parts of the application like `SignUp`, `SignIn`, `Home`, `Profile`, `Create`, etc.
- **/App.js**: The root component of the application.
- **/config.js**: Configuration file for setting up Appwrite credentials.

## Design Choices

### Authentication
I chose Appwrite for authentication to try out a new technology. Appwrite's straightforward integration with React Native allowed me to quickly set up secure sign-up and login functionalities.

### State Management
I used React Context API for state management to keep track of the user's authentication state and profile information. 

### Styling
Tailwind CSS was chosen for styling due to its utility-first approach, allowing me to quickly build responsive and clean UI components. It also provides a consistent design system across the application.

### Database and Storage
Appwrite's database and storage capabilities were utilized for storing user data, meal videos, and ingredient information.

## Contributing

I welcome contributions from the community. To contribute to Macro Mania, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
    ```bash
    git checkout -b feature-name
    ```
3. Make your changes and commit them with a descriptive message.
    ```bash
    git commit -m "Description of the feature or fix"
    ```
4. Push your changes to the branch.
    ```bash
    git push origin feature-name
    ```
5. Open a pull request detailing your changes.

## Contact

If you have any questions or need further assistance, please feel free to reach out:

- **Name**: Takai Campbell
- **Email**: tkbunbury@gmail.com
- **GitHub**: [tkbunbury](https://github.com/tkbunbury)
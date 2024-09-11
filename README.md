Here's an updated version of the `README.md` reflecting that the project is hosted and removing the license section since it's not applicable:

---

# **Build Tools Project**

This project dynamically generates a web page displaying information about popular build tools (e.g., Webpack, Vite, Parcel, etc.). It uses JavaScript to render content based on a set of data and is bundled with Webpack. The project also includes unit tests powered by Jest.

The project is live at: **[https://frolicking-sable-6554f5.netlify.app/](https://frolicking-sable-6554f5.netlify.app/)**

## **Table of Contents**

- [Getting Started](#getting-started)
- [Features](#features)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Testing](#testing)
- [Technologies Used](#technologies-used)

## **Getting Started**

To run this project locally, you'll need Node.js installed on your machine. Follow the steps below to set up the project.

### **Installation**

1. **Clone the repository:**

   ```bash
   git clone git@github.com:rougemeister/build-tools.git
   cd build-tools-project
   ```

2. **Install dependencies:**

   Inside the project directory, run:

   ```bash
   npm install
   ```

### **Running the Development Server**

This project uses Webpack to serve the app in development mode. To start the development server, run:

```bash
npm run dev
```

Your app will be available at `http://localhost:9000/`.

### **Building for Production**

To create a production build, use:

```bash
npm run build
```

This will bundle the app and place the optimized build in the `dist/` directory.

## **Features**

- Displays detailed information about popular web development build tools.
- Dynamically generates an HTML structure from `tools.json` data.
- Uses SCSS for styling.
- Includes Jest unit tests for verification of application logic.
- Live demo hosted on **Netlify**: [Live Demo](https://frolicking-sable-6554f5.netlify.app/).

## **Project Structure**

```bash
├── dist/               # Production bundle
├── public/             # Public assets (images, static files)
│   └── images/         # Image assets used in the project
├── src/                # Source files for the project
│   ├── js/             # JavaScript source files
│   │   ├── index.js    # Main entry point for the app
│   │   ├── tools.json  # JSON data for the build tools
│   │   └── __tests__/  # Test files for Jest
│   ├── styles/         # SCSS stylesheets
│   └── index.html      # HTML file
├── .gitignore          # Files to ignore in Git
├── package.json        # Project dependencies and scripts
├── webpack.config.js   # Webpack configuration
└── README.md           # Project documentation
```

### **Key Files:**

- **`src/js/index.js`:** Main JavaScript file that loads data from `tools.json` and dynamically generates HTML to display the tools.
- **`src/js/tools.json`:** Contains tool data (name, description, image, and link).
- **`src/styles/main.scss`:** The main SCSS file for styling the page.
- **`webpack.config.js`:** Configuration file for Webpack, managing asset bundling and the development server.

## **Scripts**

Here are the main npm scripts available:

- **`npm run dev`:** Starts the Webpack development server with hot module replacement.
- **`npm run build`:** Bundles the project for production in the `dist/` folder.
- **`npm test`:** Runs Jest tests.
- **`npm run test:watch`:** Runs Jest in watch mode to automatically rerun tests when changes are made.

## **Testing**

The project includes unit tests using Jest to verify the dynamic content generation.

### **Running Tests**

To run the test suite, use:

```bash
npm test
```

### **Example Test**

A test case is provided in `src/js/__tests__/index.test.js`, which ensures that the correct HTML is generated for the tools data:

```javascript
test('should set the innerHTML of #content with tools data', () => {
  const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

  require('../index');

  const content = document.getElementById('content');

  expect(content.innerHTML).toContain('Webpack');
  expect(content.innerHTML).toContain('images/webpack-logo.png');
  expect(consoleSpy).toHaveBeenCalledWith('webpack-logo.png');

  consoleSpy.mockRestore();
});
```

### **Mocking JSON Data**

The `tools.json` file is mocked in the tests to ensure that the environment is controlled and predictable, allowing for testing different scenarios.

## **Technologies Used**

- **Webpack**: For bundling assets and managing the development workflow.
- **SCSS**: For styling the web page.
- **JavaScript (ES6)**: The logic to dynamically render content and manage DOM manipulation.
- **Jest**: For testing the functionality of the app.
- **Netlify**: For hosting the project.

## **Live Demo**

You can view the live version of the project at: [https://frolicking-sable-6554f5.netlify.app/](https://frolicking-sable-6554f5.netlify.app/)

---

Feel free to modify this `README.md` based on further updates to your project or additional details you'd like to include.
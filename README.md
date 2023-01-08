# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

**And then if you want to deploy this project in github pages to take a live demo for your project you should do somethings.**
## **How to deploy a React application to GitHub Pages**

### 1- Set up your React application
### 2- Create a GitHub repository for your project
### 3- Push your React app to your GitHub repository
### 4- Adding the GitHub Pages dependency package
        Next, we’ll install the gh-pages package in our project. The package allows us to publish build files into a gh-pages branch on GitHub, where they can then be       hosted.

        Install gh-pages as a dev dependency via npm:
  - npm install gh-pages --save-dev
### 5- Adding the deploy scripts
      Now, let’s configure the package.json file so that we can point our GitHub repository to the location where our React app will be deployed.

      We’ll also need to add predeploy and deploy scripts to the package.json file. The predeploy script is used to bundle the React application; the deploy script           deploys   the bundled file.

      In the package.json file, add a homepage property that follows this structure: http://{github-username}.github.io/{repo-name}

      Now, let’s add the scripts.

      In the package.json file, scroll down to the scripts property and add the following commands:

  * "predeploy" : "npm run build",
  * "deploy" : "gh-pages -d build",

### 6- Committing changes and pushing code updates to the GitHub repo
  * git add .
  * git commit -m "setup gh-pages"
  * git push
  
### 7- npm run deploy
### live Demo : https://mohamed-khaled11.github.io/cybrog/

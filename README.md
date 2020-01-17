[![Build Status](https://dev.azure.com/glyle/simple-search/_apis/build/status/simple%20search%20CI?branchName=master)](https://dev.azure.com/glyle/simple-search/_build/latest?definitionId=22&branchName=master)

This mini project was created to 

1. fetch data from a public API based on criteria entered by the user, and  
2. display the received data in a polished, user friendly way.

## Thought process
1. Mockup the UI and extract components
2. Fetch the data
3. Display the data
4. Add search box
5. Fetch new dataset with user input

The Design

Choosing a framework for the design was easy, it could only be Bootstrap as it quickly gives me a clean, stylish look and as it's one of the most popular frameworks, it also gives the user familarity from the start. Although, BULMA (https://bulma.io/) has been getting some attention recently so it might be nice to try an alternative framework for other mini projects.

The Components

In the past few months, I have been reading up on TDD and although i haven't put it into practice yet, I do believe that it changes how you think about your project, how you break it down and ultimately allows you to write cleaner code. With that being said, from the beginning of this project I broke it down into small manageable tasks to allow me to identity quickly which elements can be pulled out and reused in the future. I particulary like to do this with basic UI components (headings, text alerts etc) as it allows us to remove the clutter of class names from the main component so we can focus on what it is trying to do.

Code Comments

You might notice that there's not alot of comments in my code, there's a reason for that. Along with intuitive naming conventions, I try to separate my code into small chunks so that it can be easily read, understood and maintained. Don't get me wrong comments are very important to explain logic or if destructuring has gone so far that it's hard to see what the code was originaly intended to do but for this mini project, there didn't seem to be much to explain.

## Would I change it?
If i was to do this project again, I would look into the different scenarios that the user might encounter (isLoaded, error, no results), I know i have added these into the current project but I feel this could be improved. I'd also like to rewrite the class component to use react hooks, something that I've yet to dive into.

## Future development
There are quite a few things that i would like to develop further within this mini project

1. Convert to Hooks &#10004;
2. Separate the API call
3. Add Cypress E2E tests
4. Increase code coverage throughout the application
5. Continue to add typechecking with PropTypes
6. Implement pagination (try with paged API)
7. Try fetching data from Twitter API

--------

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

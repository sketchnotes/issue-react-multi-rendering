Issue with re-rendering of React component.

Component `CurrentUserChecker` is rendered `6 times`

in the [compared project](https://github.com/sketchnotes/-issue-react-multi-rendering-2) the same Component `CurrentUserChecker` is rendered `4 times`.

Currect project: react(tsx, no StrictMode) + Apollo Client + GraphQL
                vs
Compared project: react(js, no StrictMode) + axios + rest

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

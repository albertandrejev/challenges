This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In order to be able to run app first of all you need to install all dependencies to do so please run `yarn install` in the app root directory.

In the project directory, you can run:

### `yarn lint`, `yarn lint:fix`

Launches eslint on sources. You can try to fix found issues using `yarn lint:fix` command.

### `yarn format`

Launches prettier formatter on sources.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Testing

Test run was splitted into two scripts for different types of tests: unit and DOM.

### `yarn test`

Launches the test runner in the CI mode.<br />
Run both test one after another.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn test:dom`

Launches DOM tests.

### `yarn test:unit`

Launches unit test.

## REST API Mock

Right now all calls to the REST API using `fetch` are mocked. In order to remove mock please comment or remove line with `setFetchMocks();` method call in [index.tsx](./src/index.tsx).

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

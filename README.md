This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The purpose of this project is to capture different types of unit tests. Testing methods, rendered components, rendered components with state and event handling.

###Storybook
Storybook has been installed with the command 

```
npx -p @storybook/cli sb init --type react
```

and the following to add typescript

```
npm install --save @types/webpack
```

```
npm install --save-dev @storybook/preset-typescript react-docgen-typescript-loader ts-loader fork-ts-checker-webpack-plugin
```
Follow this link:
```
https://storybook.js.org/docs/configurations/typescript-config/
```

```
npm install -D awesome-typescript-loader
```

it will give instructions to 
1. add the webpack.config.js
2. tsconfig.json,
3. rename config.js to stories/index.stories.js to stories/index.tsx 


Following all this, equivalent stores in the stories folder were modified to show HelloWorld and HelloGoodByeWorld
######note -D => dev dependencies in package.json

The unit tests are:

1. **utils/createNameValueList** - is a simple unit test of a typescript method.

2. **components/HelloWorld/HelloWorld** - is a simple stateless rendered component with properties. The contents of the rendered element are tested.

3. **components/HelloGoodByeWorld/HelloGoodByeWorld** - is a stateful component (using hooks) with properties, and a button. The unit test invokes the button and alters the contents of whats rendered. The contents are tested before and after the button is clicked.
 

## Available Scripts

In the project directory, you can run:

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

##axios was installed
Axios was installed with the following command

npm i @types/axios
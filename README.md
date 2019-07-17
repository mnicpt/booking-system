# System Requirements #
run `npm test` to view results of tests.  Tests defining the requirements are located in `src/Booking` and `src/Room`.

## BookingSystem
Provides overall booking system functionality to create a booking at the motel.

### API
| Function | Parameters | Return | Description |
|----------|------------|--------|-------------|
| addRoom    | room     | Void   | Adds a room to the motel |
| removeRoom | roomNumber | Void | Removes a room from the motel |
| getRoom    | roomNumber | Room | Retrieves room for given room number |
| bookRoom   | booking | Room | Books a room if available given proposed booking  |
| releaseRoom| roomNumber | Room | Releases room from being booked |
| calculateTotalCost | booking | Float | Calculates total cost from booking options |

## Booking
Object to store booking properties.

### Definition
| Name | Type | Description |
|----------|------------|--------|-------------|
| room    | Room     | Room to be booked   |
| pets | Integer | Number of pets |
| startDate    | Int64 | Start date |
| endDate   | Int64 | End date |
| accessible| boolean | Requesting accessible room |


## Room
Object to store room properties.

### Definition
| Name | Type | Description |
|----------|------------|--------|-------------|
| id    | Integer     | Room number   |
| beds | Integer | Number of beds. 1, 2 or 3. |
| level    | Integer | Start date in milliseconds |
| accessible   | boolean | End date in milliseconds |
| petsAllowed| boolean | If level 1, pets are allowed |
| cost| Float | Cost of room based on number of beds. |


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
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

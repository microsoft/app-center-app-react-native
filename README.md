# Mobile Center Mobile App

# <a href='https://www.visualstudio.com/vs/mobile-center/'><img src='https://www.visualstudio.com/wp-content/uploads/2016/11/continuous-everything@2x-400x362.png' height='80'></a>

[Microsoft Mobile Center](https://www.visualstudio.com/vs/mobile-center/) is mission control to help mobile developers build mobile apps. 

Microsoft Mobile Center Mobile App complements Microsoft Mobile Center portal to let mobile developers track developed apps' usage from customers in a light and mobile manner. The source code is 100% based on **React/React Native/Redux**. 

## Code Structure

Under **js** folder:

- **actions**:  Action and Action Creator
- **sagas**:    Saga asyn request (encapsulation of actions)
- **reducers**: State Controllers
- **utils**: REST API Calls
- **store**: Redux Store
- **containers**: [Container Components](https://github.com/reactjs/redux/blob/master/docs/basics/UsageWithReact.md)
- **pages**: [Presentational Components](https://github.com/reactjs/redux/blob/master/docs/basics/UsageWithReact.md)
- **components**: React Components, use [react-storybook](https://github.com/storybooks/react-storybook) to polish

## Working Units -- Sync with Backlog

- **login**: User can login via Github/ MSA / Mobile Center Account.
- **apps**: User can view all apps they have access too and navigate to each app they have access to.
- **user**: User Information
- **notification**: notification of apps (build, distribution, crash, analytics)
- **app**: User can view an app information
- **app.distribution.view**: User can view all distribution groups for an app.
- **app.distribution.addemail**: User can add new user emails to a distribution group.
- **app.distribution.group**: User can create/ delete distribution group.

## TODO List

Search for the **TODO** tag in the code base to check for incomplete tasks.

- Code-Push
- Continuous Integration with Fastlane and Bitrise, [Article](http://blog.thebakery.io/continuous-integration-for-react-native-applications-with-fastlane-and-bitrise-ios-version/)
- Mobile Center React Native SDK to track app usage by developers, [mobile-center-sdk-react-native](https://github.com/Microsoft/mobile-center-sdk-react-native)
- Push Notification (per app configuration),[react-native-push-notification](https://github.com/zo0r/react-native-push-notification)
- Redux Immutable State, [redux-immutable](https://github.com/gajus/redux-immutable)
- Reselect : efficient rendering computation.

## Third Party Tools and APIs

_We would like to thank and appreciate the efforts that the below library authors have made. We build upon your shoulders._

- [Microsoft Code Push](https://github.com/Microsoft/react-native-code-push) for dynamic update
- [Redux](https://github.com/reactjs/redux) is a predictable state container for reading application, together with [React Native](https://github.com/facebook/react-native)
- [Redux-Saga](https://github.com/yelouafi/redux-saga/) is a library that aims to make side effects in reading application easier and better
- [react-native-router-flux](https://github.com/aksonov/react-native-router-flux) is a router for reading based on new react native navigation API and redux
- [Jest](https://facebook.github.io/jest/) for testing [React Native](https://github.com/facebook/react-native) components and UT
- [Eslint](https://github.com/eslint/eslint) is a tool for identifying and reporting on patterns found in reading application code
- [redux-devtools](https://github.com/gaearon/redux-devtools) DevTools for Redux with hot reloading, action replay, and customizable UI

## Build

TODO, check with a new setup in a machine.

<!--### Step One

```
npm install -g react-native-cli
```
### Step Two

```
npm install
react-native link react-native-device-info
react-native link react-native-vector-icons

react-native link react-native-svg

```-->

<!--### Step-->

```
npm install
react-native start
```
<!--### Run Test

Current test includes action test, reducer test, middleware test and component test.-->

<!--```
npm test
```-->

# Contributing

There are several ways to contribute to the current app:

1. **Full stack contribution**: If you want to implement one [func sync with backlog](#Working Units -- Sync with Backlog), you need to implement actions, sagas, reducers, api calls, container and presentational containers. __Please make sure to write the saga and reducer jest tests, all tests should be passed for a PR.__ Here it is [Microsoft Mobile Center REST API End Point](https://docs.mobile.azure.com/api/). 

2. **UI contribution**: Design is the most important factor other than implementation, feel free to [react-storybook](https://github.com/storybooks/react-storybook) to share your design idea and refactor the react components.

3. **Performance contribution**: Pick the right tool can greatly accelerate our development life cycle, we believe it. In terms of the development, react community is a fast changing world, we love it. Feel free to tell us what libraries we should use to further improve the dev-cycle or the running performance.

4. **Idea contribution**: Have you used the [Mobile Center Portal](https://mobile.azure.com/)? We believe you did. The key design philosophy of mobile version is to let developers retrieve app usage data from customizable notification mechanism. Developers only want to fetch data or message, view them in the mobile. They can further do the app update through the web portal. Do you  agree with it? If not, can you tell us your opinions? If yes, what other special requirements do you think about? Tell us, we will add it in to fullfill your needs.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
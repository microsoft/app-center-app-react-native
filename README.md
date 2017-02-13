# Mobile Center Mobile App

[Microsoft Mobile Center](https://www.visualstudio.com/vs/mobile-center/) is mission control to help mobile developers build mobile apps.

Microsoft Mobile Center Mobile App complement Microsoft Mobile Center portal to let mobile developers track their developed apps' usage from customers in a light and mobile manner.

The key design philosophy of mobile version is to let developers retrieve app usage data from customizable notification mechanism. Developers only want to fetch data or message, view them in the mobile. They can further do the app update through the web portal.

## How We Build It
Microsoft Mobile Center Mobile App is a light-and-thin client side app to access data from [Microsoft Mobile Center REST API End Point](https://docs.mobile.azure.com/api/). The source code is 100% based on *React Native*. We used the Auth0 with JWTs to consume REST APIs. Here it is a good tutorial how to [add authentication to react native app using JWTs](https://github.com/jeffreylees/reactnative-jwts).

## TODO List

- Continuous Integration with Fastlane and Bitrise, [Article](http://blog.thebakery.io/continuous-integration-for-react-native-applications-with-fastlane-and-bitrise-ios-version/)

- Mobile Center React Native SDK to track app usage by developers, [mobile-center-sdk-react-native](https://github.com/Microsoft/mobile-center-sdk-react-native)
- Push Notification (per app configuration),[react-native-push-notification](https://github.com/zo0r/react-native-push-notification)
- Redux Immutable State, [redux-immutable](https://github.com/gajus/redux-immutable)
- Code Review Service, [Code Review](https://codeclimate.com/dashboard)

## Application Architecture

_We would like to thank and appreciate the efforts that the below library authors have made. We build upon your shoulders._

- [Microsoft Code Push](https://github.com/Microsoft/react-native-code-push) for dynamic update
- [Redux](https://github.com/reactjs/redux) is a predictable state container for reading application, together with [React Native](https://github.com/facebook/react-native)
- [Redux-Saga](https://github.com/yelouafi/redux-saga/) is a library that aims to make side effects in reading application easier and better
- [react-native-router-flux](https://github.com/aksonov/react-native-router-flux) is a router for reading based on new react native navigation API and redux
- [Jest](https://facebook.github.io/jest/) for testing [React Native](https://github.com/facebook/react-native) components and UT
- [Eslint](https://github.com/eslint/eslint) is a tool for identifying and reporting on patterns found in reading application code
- [redux-devtools](https://github.com/gaearon/redux-devtools) DevTools for Redux with hot reloading, action replay, and customizable UI
- [F8App](https://github.com/fbsamples/f8app) A good reference to build a mobile app from scratch

## Development Workflow

<!--### Step One

```
npm install -g react-native-cli
```
### Step Two

```
npm install
react-native link react-native-device-info
react-native link react-native-vector-icons
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

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
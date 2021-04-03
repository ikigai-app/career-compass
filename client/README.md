# Client

- [Expo](https://docs.expo.io) for cross platform mobile app iOS & android

- [React Native Web](https://necolas.github.io/react-native-web/)

- [React-Navigation](https://reactnavigation.org/docs/getting-started) - Use for the main navigation
- [styled-components](https://styled-components.com) - css-in-js
- [Apollo Client](https://www.apollographql.com/docs/react/get-started/) : A comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL.

- [react-responsive](https://github.com/contra/react-responsive) & [@expo/match-media](https://blog.expo.io/media-queries-with-react-native-for-ios-android-and-web-e0b73ed5777b?gi=ce988226212c) - To render the web & mobile component separately

##### Expo

```shell
#if not installed
$ npm install -g expo-cli
```

#### How to Run?

Before running update .env in your root directive

```shell
GRAPHQL_ENDPOINT = " "
SOVREN_ENDPOINT = " "
SOVREN_ACCOUNT_ID = " "
SOVREN_SERVICE_KEY = " "
```

run

```shell

$ npm i

$ expo start or npm start

# Scan the QR code above with Expo Go (Android) or the Camera app (iOS)

› Press a │ open Android
› Press i │ open iOS simulator
› Press w │ open web

› Press d │ open developer tools
› shift+d │ toggle auto opening developer tools on startup (disabled)
› Press e │ share the app link by email

```

### How to Publish to expo?

```shell

# return the currently authenticated account
$ expo w

$ expo login
# enter expo userName and expo password

$ expo publish

```

### QR CODE

Install Expo GO Client app to test the app [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_IN&gl=US) [iOS](https://apps.apple.com/us/app/expo-go/id982107779)

Scan the QR code and run the app. (Expo Published)
<img src="../QR.png" alt="QRcode"/>

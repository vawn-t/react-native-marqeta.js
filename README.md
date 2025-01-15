# react-native-marqeta.js

## Introduction

This library allows you to integrate Marqeta's payment processing capabilities into your React Native application.

## Installation

To install the library, use npm or yarn:

```sh
npm install react-native-marqeta.js
# or
yarn add react-native-marqeta.js
```

## Integration

To integrate `marqeta.js` into your React Native app, follow these steps:

1. **Create the HTML file:**
   Create a file named `sensitive.html` in the appropriate directories for both iOS and Android:

   - iOS: `path/to/your/project/ios/yourAppName/sensitive.html`
   - Android: `path/to/your/project/android/app/src/main/assets/sensitive.html`

   **NOTE:** For iOS, you have to add the link the sensitive.html file using XCode.

   Use the provided content for the `sensitive.html` file.

## Note

The `sensitive.html` file is only used for the release build.

## Documentation

For more detailed information, please refer to the [official Marqeta JS documentation](https://www.marqeta.com/docs/developer-guides/using-marqeta-js/).

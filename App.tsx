/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {Alert, Platform, View} from 'react-native';
import ReactNativeBlobUtil from 'react-native-blob-util';
import WebView from 'react-native-webview';

function App(): React.JSX.Element {
  const appDirectories = ReactNativeBlobUtil.fs.dirs;

  let htmlFilePath = '';
  if (Platform.OS === 'ios') {
    htmlFilePath = `${appDirectories.MainBundleDir}/sensitive.html`;
  } else {
    htmlFilePath = 'file:///android_asset/sensitive.html';
  }

  const token = '';

  const externalURL =
    'https://widgets-sandbox.marqeta.com/marqetajs/2.0.0/marqeta.min.js'; // NOTE: Replace with your external URL if env is production

  return (
    <View style={{flex: 1, paddingTop: 100}}>
      <WebView
        source={{uri: htmlFilePath}}
        scrollEnabled={false}
        scalesPageToFit
        allowFileAccessFromFileURLs
        javaScriptEnabled
        domStorageEnabled
        allowUniversalAccessFromFileURLs
        allowFileAccess
        originWhitelist={['*']}
        mixedContentMode="always"
        injectedJavaScriptObject={{token, externalURL}} // Pass token and the external url to htmlView
        onMessage={event => {
          Alert.alert('Message from WebView: ' + event.nativeEvent.data);
        }}
        style={{flex: 1}}
      />
    </View>
  );
}

export default App;

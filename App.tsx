/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {Alert, Platform, SafeAreaView} from 'react-native';
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

  const token =
    'eyJ0b2tlbiI6IjAyODYyZTU1LWE4MGUtNDVmYy1iMzhlLTFkYmNlODQxODJhMiZhcHBsaWNhdGlvbl90b2tlbj10cnByaW1lX3NhbmRib3hfYXBpX2NvbnN1bWVyIiwiYXBwbGljYXRpb24iOnsidG9rZW4iOiJ0cnByaW1lX3NhbmRib3hfYXBpX2NvbnN1bWVyIiwiYWN0aXZlIjp0cnVlLCJjbGllbnRfYXBpX2Jhc2VfdXJsIjoiaHR0cHM6Ly93aWRnZXRzLXNhbmRib3gubWFycWV0YS5jb20vY2xpZW50L2FwaS92MSIsImFzc2V0c191cmwiOiJodHRwczovL3dpZGdldHMtc2FuZGJveC5tYXJxZXRhLmNvbS9jbGllbnQvYXNzZXRzLzEuMC4wIn0sImFwcGxpY2F0aW9uX3Rva2VuIjoidHJwcmltZV9zYW5kYm94X2FwaV9jb25zdW1lciIsImNsaWVudHRva2VuX2lkIjoiNjcyODc1NjRlY2E1YmE3NDIyMDQzODJjIiwiY2FyZF90b2tlbiI6InRwcmltZV9jYXJkXzExa2hoOGo4MTJjcmVtMSIsImNyZWF0ZWQiOiIyMDI0LTExLTA0VDA3OjE5OjAwKzAwMDAiLCJleHBpcmVzIjoiMjAyNC0xMS0wNFQwNzoyNDowMCswMDAwIn0=';

  const externalURL =
    'https://widgets.marqeta.com/marqetajs/2.0.0/marqeta.min.js'; // NOTE: Replace with your external URL if env is production

  return (
    <SafeAreaView style={{flex: 1}}>
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
    </SafeAreaView>
  );
}

export default App;

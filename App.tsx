/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {PixelRatio, Platform, View} from 'react-native';
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

  const token = 'PLACE YOUR TOKEN HERE';

  const textScale = PixelRatio.getFontScale();

  const fontScale = textScale > 1.5 ? 1.5 : textScale;

  // JavaScript to inject into the WebView to apply text scaling based on device settings
  const injectedJavaScript = `
    (function() {
      var metaTag = document.querySelector('meta[name="viewport"]');
      if (metaTag) {
        metaTag.setAttribute('content', 'width=device-width, initial-scale=${fontScale}, maximum-scale=1.5, user-scalable=no');
      }
    })();
  `;

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
        textZoom={100 * fontScale}
        injectedJavaScriptObject={{token, externalURL}} // Pass token, type and the external url to htmlView
        injectedJavaScript={
          Platform.OS === 'ios' ? injectedJavaScript : undefined
        }
        onMessage={event => {
          Sentry.captureMessage(
            'Message from WebView: ' + event.nativeEvent.data,
          );
        }}
        style={{flex: 1, height: 24 * fontScale}}
      />
    </View>
  );
}

export default App;

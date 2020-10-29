import React, { useEffect } from 'react';
import { View, StyleSheet, Platform } from 'react-native';

import { WebView } from 'react-native-webview';
import { PermissionsAndroid } from 'react-native';

export default App = () => {
  useEffect(() => {
    const checkPerm = async () => {
      try {
        if (Platform.OS === 'android') {
          const permission = PermissionsAndroid.PERMISSIONS.CAMERA;
          const status = await PermissionsAndroid.request(permission);
          console.log('Status: ', status);
        }
      } catch (err) {
        console.log('error', err);
      }
    };
    checkPerm();
  }, []);

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://www.onlinemictest.com/webcam-test/' }}
        mediaPlaybackRequiresUserAction={false}
        javaScriptEnabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
});

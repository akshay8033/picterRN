import React from 'react';
import { View, StyleSheet } from 'react-native';

import { WebView } from 'react-native-webview';

export default App = () => {
  return (
    <View style={styles.container}>
      <WebView source={{ uri: 'https://telehealthtest.tk/user/login' }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
});

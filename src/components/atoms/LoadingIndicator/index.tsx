import * as React from 'react';
import Colors from '@constants/colors';
import {ActivityIndicator, Modal, StyleSheet, View} from 'react-native';

const LoadingIndicator = () => {
  return (
    <Modal transparent={true} visible={true}>
      <View style={styles.container}>
        <View style={styles.card}>
          <ActivityIndicator />
        </View>
      </View>
    </Modal>
  );
};

export {LoadingIndicator};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.backgroundColorModal,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: Colors.backgroundCardLoading,
    borderRadius: 20,
    padding: 32,
  },
});

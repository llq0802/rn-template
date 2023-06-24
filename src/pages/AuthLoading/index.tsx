import React, {FC, ReactNode, useEffect} from 'react';
import {Text, StatusBar, StyleSheet, SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';

type PropsType = {
  navigation?: any;
  children: ReactNode | (() => React.JSX.Element);
};

const AuthLoadingScreen: FC<PropsType> = ({navigation, children}) => {
  // const {token, authState} = useSelector(state => state.global);
  if (typeof children === 'function') {
    return children();
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text>Loading...</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AuthLoadingScreen;

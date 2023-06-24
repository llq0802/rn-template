import React, {useState} from 'react';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TextInput, SafeAreaView, StyleSheet, StatusBar, Text} from 'react-native';

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text>登录</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Login;

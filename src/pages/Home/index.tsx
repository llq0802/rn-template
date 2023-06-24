import React, {Component} from 'react';
import {Button, SafeAreaView, Text} from 'react-native';

export default function Home({navigation}) {
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Button title="详情" onPress={() => navigation.navigate('Details')} />
    </SafeAreaView>
  );
}

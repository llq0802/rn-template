import React from 'react';
import {StatusBar, Text, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyCenter from '../pages/MyCenter';
import Order from '../pages/Order';
import Home from '../pages/Home';

const tabs = [
  {
    name: 'Home',
    component: Home,
    title: '首页',
    // icon: 'inbox',
  },
  {
    name: 'Order',
    component: Order,
    title: '订单',
    // icon: 'file-text',
  },
  {
    name: 'MyCenter',
    component: MyCenter,
    title: '我的',
    // icon: 'user',
  },
];

const BottomTabs = createBottomTabNavigator();

/**
 * Tabs组件
 * @param props
 * @returns
 */
const Layouts = props => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        // tabBarActiveTintColor: '#000',
        // tabBarInactiveTintColor: 'red',
        headerShown: false,
      }}>
      {tabs.map((item, idx) => {
        return (
          <BottomTabs.Screen
            key={idx}
            name={item.name}
            component={item.component}
            options={{
              // headerTintColor: '#fff',
              // title: item.title,
              // headerStyle: {backgroundColor: '#ccc'},
              // tabBarBadge: 3,
              // tabBarButton: props => <TouchableOpacity {...props} />,
              tabBarStyle: {
                backgroundColor: '#ccc',
              },
              tabBarItemStyle: {
                justifyContent: 'center',
              },
              // tabBarIcon: ({focused}) => (
              //   <Text
              //     style={{
              //       color: focused ? 'red' : 'blue',
              //       fontSize: 12,
              //     }}>
              //     {item?.title}
              //   </Text>
              // ),
              tabBarLabel: ({focused}) => (
                <Text
                  style={{
                    color: focused ? 'red' : 'blue',
                    fontSize: 12,
                    // height: 20,
                    // lineHeight: 20,
                    // justifyContent: 'center',
                    // alignItems: 'center',
                  }}>
                  {item?.title + '0'}
                </Text>
              ),
            }}
          />
        );
      })}
    </BottomTabs.Navigator>
  );
};

export default Layouts;

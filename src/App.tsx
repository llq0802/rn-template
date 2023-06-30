import 'react-native-gesture-handler'; // 必须放在头部!!!
import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer, useNavigationContainerRef, DefaultTheme, DarkTheme} from '@react-navigation/native';
import {StackNavigationOptions, createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {store} from './models';
import AuthLoadingScreen from './pages/AuthLoading';
import stackPageData from './routes';
import {QueryClient, QueryClientProvider} from 'react-query';

const Stack = createStackNavigator();
const queryClient = new QueryClient();

export default () => {
  const navigationRef = useNavigationContainerRef();

  const colorScheme = useColorScheme();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <StatusBar barStyle="light-content" />
        <NavigationContainer ref={navigationRef} theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <AuthLoadingScreen>
            {() => (
              <Stack.Navigator
                initialRouteName={'Tabs'}
                screenOptions={{
                  headerShown: false,
                  header: () => null,
                }}>
                {stackPageData.map((props, index) => {
                  return (
                    <Stack.Screen
                      key={index}
                      {...props}
                      // name="Home"
                      // options={{
                      //   header: () => null
                      // }}
                      // component={Home}
                    />
                  );
                })}
              </Stack.Navigator>
            )}
          </AuthLoadingScreen>
        </NavigationContainer>
      </QueryClientProvider>
    </Provider>
  );
};

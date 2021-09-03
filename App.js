/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainListView from './src/components/MainListView';
import ListView from './src/components/ListView';
import DetailView from './src/components/DetailView';



const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};


const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const MyTheme = {
          ...DefaultTheme,
          colors: {
              ...DefaultTheme.colors,
              background: 'transparent',
          },
  };

  return (
      <ImageBackground source={require('./src/image/BgImage.jpg')} style={{width: '100%', height: '100%'}}>
          <NavigationContainer theme={MyTheme}>
            <Stack.Navigator>
              <Stack.Screen name="MainList" component={MainListView}/>
              <Stack.Screen name="List" component={ListView}/>
              <Stack.Screen name="DetailView" component={DetailView}/>
            </Stack.Navigator>
          </NavigationContainer>
      </ImageBackground>
  );
};

export default App;

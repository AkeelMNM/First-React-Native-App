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
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainListView from './src/components/MainListView';
import CivilizationsListView from './src/components/CivilizationsListView';
import UnitsListView from './src/components/UnitsListView';
import StructuresListView from './src/components/StructuresListView';
import CivilizationView from './src/components/CivilizationView';
import UnitView from './src/components/UnitView';
import StructureView from './src/components/StructureView';

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

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MainList" component={MainListView}/>
          <Stack.Screen name="Civilizations List" component={CivilizationsListView}/>
          <Stack.Screen name="Units List" component={UnitsListView}/>
          <Stack.Screen name="Structures List" component={StructuresListView}/>
          <Stack.Screen name="Civilization" component={CivilizationView}/>
          <Stack.Screen name="Unit" component={UnitView}/>
          <Stack.Screen name="Structures" component={StructureView}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;

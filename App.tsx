import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/view/screens/HomeScreen';
import DetailsScreen from './src/view/screens/DetailScreen';

import { StatusBar } from 'react-native';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor='' />
        <Stack.Navigator screenOptions={{ header: () => null }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};
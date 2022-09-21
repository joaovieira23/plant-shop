import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, Poppins_300Light } from '@expo-google-fonts/poppins';

import HomeScreen from './src/view/screens/HomeScreen';
import DetailsScreen from './src/view/screens/DetailScreen';

import { StatusBar, ActivityIndicator } from 'react-native';

export default function App() {

  const Stack = createNativeStackNavigator();

  const [fontsLoaded] = useFonts({
    Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, Poppins_300Light
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }

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
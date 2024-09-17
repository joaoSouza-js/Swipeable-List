import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/app/home';
import {GestureHandlerRootView} from "react-native-gesture-handler"
import { SafeAreaProvider } from 'react-native-safe-area-context';
export default function App() {
  return (
    <SafeAreaProvider>
    <GestureHandlerRootView>
      <StatusBar style="auto" />
      <Home/>
    </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}



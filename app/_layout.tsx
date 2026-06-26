import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import '@/global.css';
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'sans-regular': require("./assets/fonts/PlusJakartaSans-Regular.ttf"),
    'sans-light': require('./assets/fonts/PlusJakartaSans-Light.ttf'),
    'sans-bold': require('./assets/fonts/PlusJakartaSans-Bold.ttf'),
    'sans-semibold': require('./assets/fonts/PlusJakartaSans-SemiBold.ttf'),
    'sans-extrabold': require('./assets/fonts/PlusJakartaSans-ExtraBold.ttf'),
    'sans-medium': require('./assets/fonts/PlusJakartaSans-Medium.ttf')
  })

  useEffect(() => {
    if(fontsLoaded) SplashScreen.hideAsync()
  },[fontsLoaded])

  // stops app if font not loaded
  if(!fontsLoaded) return null;

  return <Stack screenOptions={{headerShown:false}}/>;
}

import '@/global.css';
import { styled } from "nativewind";
import { Link } from 'expo-router';
import { Text } from "react-native";
import { SafeAreaView as RawSafeAreaView } from 'react-native-safe-area-context';

const SafeAreaView = styled(RawSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className='flex-1 bg-background p-5'>
      
    </SafeAreaView>
  );
}

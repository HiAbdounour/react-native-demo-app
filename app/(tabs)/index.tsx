import '@/global.css';
import { styled } from "nativewind";
import { Link } from 'expo-router';
import { Text } from "react-native";
import { SafeAreaView as RawSafeAreaView } from 'react-native-safe-area-context';

const SafeAreaView = styled(RawSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className='flex-1 bg-background p-5'>
      <Text className='text-7xl font-sans-bold text-success'>
        This is a demo.
      </Text>
      <Link href='/onboarding' className='mt-4 rounded bg-primary text-white p-4'>Go to onboarding page</Link>
      <Link href='/(auth)/signin' className='mt-4 rounded bg-primary text-white p-4'>Sign In</Link>
      <Link href='/(auth)/signup' className='mt-4 rounded bg-primary text-white p-4'>Sign Up</Link>
    
    
      <Link href={{
        pathname: '/subscriptions/[id]',
        params: {id:"vegner"}
      }}>Vegner Subscription</Link>
    
    
    </SafeAreaView>
  );
}

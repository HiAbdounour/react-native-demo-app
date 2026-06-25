import '@/global.css';
import { Link } from 'expo-router';
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className='flex-1 items-center justify-center bg-background'>
      <Text className='text-xl font-bold text-success'>
        Ceci est un test.
      </Text>
      <Link href='/onboarding' className='mt-4 rounded bg-primary text-white p-4'>Go to onboarding page</Link>
      <Link href='/(auth)/signin' className='mt-4 rounded bg-primary text-white p-4'>Sign In</Link>
      <Link href='/(auth)/signup' className='mt-4 rounded bg-primary text-white p-4'>Sign Up</Link>
    
    
      <Link href={{
        pathname: "/subscriptions/[id]",
        params: {id:"vegner"}
      }}>Vegner Subscription</Link>
    
    
    </View>
  );
}

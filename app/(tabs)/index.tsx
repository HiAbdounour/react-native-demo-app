import '@/global.css';
import { styled } from "nativewind";
import { Link } from 'expo-router';
import { Text,View,Image } from "react-native";
import { SafeAreaView as RawSafeAreaView } from 'react-native-safe-area-context';
import image from '@/constants/image';
import { HOME_BALANCE, HOME_USER } from '@/constants/data';
import { icons } from '@/constants/icon';
import { formatCurrency } from '@/lib/USD';
import dayjs from 'dayjs';

const SafeAreaView = styled(RawSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className='flex-1 bg-background p-5'>
      <View className="home-header">
        <View className='home-user'>
          <Image source={image.Avatar} className='home-avatar'/>
          <Text className='home-user-name'>{HOME_USER.name}</Text>
        </View>

        <Image source={icons.add} className='home-add-icon'/>
      </View>

      <View className='home-balance-card'>
        <Text className='home-balance-lavel'>Balance</Text>
        <View className='home-balance-row'>
          <Text className='home-balance-amount'>{formatCurrency(HOME_BALANCE.amount)}</Text>
          <Text className='home-balance-date'>{dayjs(HOME_BALANCE.nextRenewalDate).format('MM/DD')}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

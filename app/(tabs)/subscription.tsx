import { View,Text } from 'react-native'
import { Link } from 'expo-router'
import { styled } from "nativewind"
import { SafeAreaView as RawSafeAreaView } from 'react-native-safe-area-context';

const SafeAreaView = styled(RawSafeAreaView);

const Subscription = () => {
    return(
        <SafeAreaView>
            <Text>Subscription</Text>
        </SafeAreaView>
    )
}

export default Subscription
import { Text } from 'react-native'
import { styled } from "nativewind"
import { SafeAreaView as RawSafeAreaView } from 'react-native-safe-area-context';

const SafeAreaView = styled(RawSafeAreaView);

const Insights = () => {
    return(
        <SafeAreaView>
            <Text>Insights</Text>
        </SafeAreaView>
    )
}

export default Insights
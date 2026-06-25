import { Text } from 'react-native'
import { styled } from "nativewind";
import { SafeAreaView as RawSafeAreaView } from 'react-native-safe-area-context';

const SafeAreaView = styled(RawSafeAreaView);


const Settings = () => {
    return(
        <SafeAreaView>
            <Text>Settings</Text>
        </SafeAreaView>
    )
}

export default Settings
import { View,Text } from 'react-native'
import { Link } from 'expo-router'

const SignIn = () => {
    return(
        <View>
            <Text>SignIn</Text>
            <Link href='/(auth)/signup'>I want to create an account</Link> 
        </View>
    )
}

export default SignIn
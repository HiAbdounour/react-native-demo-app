import { tabs } from "@/constants/data";
import { Tabs } from "expo-router";
import { View,Image } from "react-native";
import clsx from "clsx";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TabLayout = () => {
    const insets = useSafeAreaInsets();
    const TabIcon = ({focused,icon}:TabIconProps) => {
        return(
            <View className="tabs-icon">
                <View className={clsx("tabs-pill",focused&&"tabs-active")}>
                    <Image 
                        source={icon}
                        className="tabs-glyph"
                        resizeMode='contain'
                    />
                </View>
            </View>
    )};

    return(
        <Tabs screenOptions={{
            headerShown:false,
            tabBarShowLabel:false,
            tabBarStyle:{
                position:"absolute",
                Math.max(insets.bottom,)
            }
        }}>
            {tabs.map((tab)=>(
                <Tabs.Screen
                    key={tab.name}
                    name={tab.name}
                    options={{
                        title: tab.title,
                        tabBarIcon: ({focused})=>(<TabIcon focused={focused} icon={tab.icon}/>)
                    }}
                />
            ))}
        </Tabs>
    )
}

export default TabLayout

// <Tabs.Screen name='subscriptions/[id]' options={{href:null}}/>
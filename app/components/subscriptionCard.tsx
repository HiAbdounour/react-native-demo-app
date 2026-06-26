import { formatCurrency, formatSubscriptionDateTime } from "@/lib/USD"
import clsx from "clsx"
import { View,Text, Image } from "react-native"

function SubscriptionCard({ name,price,currency,icon,billing,color,renewalDate,plan,category }:SubscriptionCardProps){

    return(
        <View
            className={clsx("sub-card","bg-card")}
            style={color ? {backgroundColor:color} : undefined}
        >
            <View className="sub-head">
                <View className="sub-main">
                    <Image source={icon} className="sub-icon"/>
                    <View className="sub-copy">
                        <Text className="sub-title" numberOfLines={1}>{name}</Text>
                    </View>
                    <Text
                        className="sub-meta"
                        numberOfLines={1}
                        ellipsizeMode="tail"
                    >
                        {category?.trim() || plan?.trim() || (renewalDate ? formatSubscriptionDateTime(renewalDate) : '')}
                    </Text>
                </View>

                <View className="sub-price-box">
                    <Text className="sub-price">{formatCurrency(price,currency)}</Text>
                    <Text className="sub-billing">{billing}</Text>
                </View>
            </View>
        </View>
    )
}

export default SubscriptionCard
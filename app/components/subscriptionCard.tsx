import { formatCurrency, formatSubscriptionDateTime } from "@/lib/USD"
import clsx from "clsx"
import { View,Text,Pressable,Image } from "react-native"

function SubscriptionCard({ name,expanded,price,currency,icon,billing,color,renewalDate,plan,category,paymentMethod,onPress }:SubscriptionCardProps){

    return(
        <Pressable
            className={clsx("sub-card",expanded ? 'sub-card-expanded' : 'bg-card')}
            style={color && !expanded ? {backgroundColor:color} : undefined}
            onPress={onPress}
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

            {expanded && 
                <View className="sub-bdy">
                    <View className="sub-details">
                        <View className="sub-row">
                            <View className="sub-row-copy">
                                <Text className="sub-label">Payment :</Text>
                                <Text className="sub-value" numberOfLines={1} ellipsizeMode="tail">{paymentMethod?.trim()}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            }
        </Pressable>
    )
}

export default SubscriptionCard
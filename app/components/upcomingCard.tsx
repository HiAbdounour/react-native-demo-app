import { formatCurrency } from "@/lib/USD"
import { View,Text,Image } from "react-native"

function UpcomingCard({ data:{ name,price,daysLeft,icon,currency } }:UpcomingSubscriptionCardProps){

    return(
        <View className="upcoming-card">
            <View className="upcoming-row">
                <Image source={icon} className="upcoming-icon"/>
                <View>
                    <Text className="upcoming-price">
                        {formatCurrency(price,currency)}
                    </Text>
                    <Text className="upcoming-meta" numberOfLines={1}>
                        {daysLeft > 1 ? `${daysLeft} days left` : 'Last day !'}
                    </Text>
                </View>
            </View>
            <Text className="upcoming-name" numberOfLines={1}>{name}</Text>
        </View>
    )
}

export default UpcomingCard
import { Text, View } from "react-native"
import { USER_DTO } from "../../data/users"
import { styles } from "./styles"

type cardProps = {
    user: USER_DTO
}
export function Card(props: cardProps){
    const {user} = props
    
    return (
        <View style={styles.container}>
            <Text style={styles.name}> {user.name}</Text>
            <Text style={styles.email   }> {user.email }</Text>
            
        </View>
    )
}
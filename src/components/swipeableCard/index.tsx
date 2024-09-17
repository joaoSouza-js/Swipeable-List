import { CardOption } from "../cardOption";
import { Alert, View } from "react-native";
import { Card } from "../card";
import Swipeable, {
    SwipeableProps,
    SwipeableMethods,
} from "react-native-gesture-handler/ReanimatedSwipeable";
import { USER_DTO } from "../../data/users";
import { styles } from "./styles";

type closePreviousSwipeableProps = {
    direction: "left" | "right";
    swipeableCurrentRef: SwipeableMethods | null;
};

type swipeableCardProps = SwipeableProps & {
    closeSwipeable: () => void;
    deleteUser: (id: string) => void;
    user: USER_DTO;
    closePreviousSwipeable: (props: closePreviousSwipeableProps) => void;
};

export function SwipeableCard(props: swipeableCardProps) {
    const {
        closePreviousSwipeable,
        closeSwipeable,
        deleteUser,
        user,
        ...rest
    } = props;
    function deleteUserAlert() {
        Alert.alert(
            "deletar Contato",
            "Tem cereteza que quer deletar este contato",
            [
                {
                    style: "cancel",
                    text: "cancelar",
                },
                {
                    style: "destructive",
                    text: "deletar",
                    onPress: () => deleteUser(user.id),
                },
            ]
        );
    }

    let current: SwipeableMethods | null = null;

    return (
        <Swipeable
            ref={(swiapleRef) => {
                current = swiapleRef;
            }}
            onSwipeableWillOpen={(direction) => {
                closePreviousSwipeable({
                    direction: direction,
                    swipeableCurrentRef: current,
                });
            }}
            leftThreshold={10}
            containerStyle={styles.swipeableContainer}
            overshootRight={false}
            overshootLeft={false}
            renderLeftActions={() => (
                <CardOption onPress={deleteUserAlert} option="delete" />
            )}
            renderRightActions={() => (
                <View style={styles.swipeableItems}>
                    <CardOption option="confirm" />
                    <CardOption onPress={closeSwipeable} option="close" />
                </View>
            )}
            {...rest}
        >
            <Card user={user} />
        </Swipeable>
    );
}

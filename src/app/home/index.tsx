import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import { useSafeTopInset } from "../../hooks/safeTopInset";
import { users as USERS } from "../../data/users";
import { SwipeableMethods } from "react-native-gesture-handler/ReanimatedSwipeable";
import { useRef, useState } from "react";
import { SwipeableCard } from "../../components/swipeableCard";

type closePreviousSwipeableProps = {
    direction: "left" | "right";
    swipeableCurrentRef: SwipeableMethods | null;
};

export function Home() {
    const { safeTop } = useSafeTopInset();
    const [users, setUsers] = useState(USERS);

    const openSwipeableRef = useRef<SwipeableMethods | null>(null);

    function deleteUser(userId: string) {
        const listOfUserWithoutOneUser = users.filter(
            (user) => user.id !== userId
        );
        setUsers(listOfUserWithoutOneUser);
    }

    function closePreviousSwipeable(props: closePreviousSwipeableProps) {
        const { direction, swipeableCurrentRef } = props;

        if (openSwipeableRef.current == swipeableCurrentRef) return;

        if (openSwipeableRef.current) {
            openSwipeableRef.current.close();
        }

        openSwipeableRef.current = swipeableCurrentRef;
    }

    function closeSwipeable() {
        if (!openSwipeableRef.current) return;
        openSwipeableRef.current.close();
    }

    return (
        <View
            style={[
                styles.container,
                {
                    paddingTop: safeTop,
                },
            ]}
        >
            <View style={styles.header}>
                <Text style={styles.title}>Swipeable List 😍😍😍</Text>
            </View>
            <FlatList
                data={users}
                style={{
                    marginTop: 16,
                }}
                renderItem={({ item: user }) => (
                    <SwipeableCard
                        closePreviousSwipeable={closePreviousSwipeable}
                        closeSwipeable={closeSwipeable}
                        deleteUser={deleteUser}
                        user={user}
                    />
                )}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{
                    paddingBottom: 62,
                }}
            />
        </View>
    );
}

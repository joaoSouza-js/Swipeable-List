import { TouchableOpacity } from "react-native";
import { TouchableOpacityProps } from "react-native-gesture-handler";
import { styles } from "./styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type fontAwesomeIconsType = keyof typeof FontAwesome.glyphMap;

type cardOptionsType = "delete" | "confirm" | "warning" | "info" | "close";

type CardOptionProps = TouchableOpacityProps & {
    option: cardOptionsType;
};

function selectCardOptionColors(option: cardOptionsType) {
    let cardOptionColor: string;

    switch (option) {
        case "confirm":
            cardOptionColor = "#22c55e";
            break;
        case "delete":
            cardOptionColor = "#ef4444";
            break;
        case "warning":
            cardOptionColor = "#eab308";
            break;
        case "close":
            cardOptionColor = "#71717a";
            break;
        case "info":
            cardOptionColor = "#71717a";
            break;
        default:
            cardOptionColor = "#71717a";
    }

    return cardOptionColor;
}

function selectCardOptionIconName(
    option: cardOptionsType
): fontAwesomeIconsType {
    let cardOptionIconName: fontAwesomeIconsType;

    switch (option) {
        case "confirm":
            cardOptionIconName = "check";
            break;
        case "delete":
            cardOptionIconName = "trash-o";
            break;
        case "warning":
            cardOptionIconName = "warning";
            break;
        case "close":
            cardOptionIconName = "remove";
            break;
        case "info":
            cardOptionIconName = "info";
            break;
        default:
            cardOptionIconName = "info";
    }

    return cardOptionIconName;
}

export function CardOption(props: CardOptionProps) {
    const { option = "confirm", style, ...rest } = props;

    const cardOptionColor = selectCardOptionColors(option);
    const cardOptionIconName = selectCardOptionIconName(option);

    return (
        <TouchableOpacity
            style={[
                styles.container,
                {
                    backgroundColor: cardOptionColor,
                },
                style,
            ]}
            activeOpacity={0.7}
            {...rest}
        >
            <FontAwesome size={24} color={"#fff"} name={cardOptionIconName} />
        </TouchableOpacity>
    );
}

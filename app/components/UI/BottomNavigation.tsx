import { View } from "react-native";
import LinkIcon from "./LinkIcon";

export default function BottomNavigation() {
    return (
        <View
            style={{ gap: 16 }}
            className="px-6 py-4 justify-center items-center flex-row"
        >
            <LinkIcon href="/" name="home-outline" />
            <LinkIcon href="#" name="swap-horizontal" />
            <LinkIcon href="#" name="ticket-confirmation-outline" />
            <LinkIcon href="#" name="newspaper-variant-multiple" />
            <LinkIcon href="#" name="account-outline" />
        </View>
    );
}

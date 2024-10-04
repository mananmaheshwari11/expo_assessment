import { ScrollView, View } from "react-native";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import ForYou from "./components/ForYou";
import BottomNavigation from "./components/UI/BottomNavigation";

export default function TabOneScreen() {
    return (
        <View className="flex-1">
            <ScrollView>
                <View className="px-6 py-4">
                    <Navbar />
                </View>
                <Categories />
                <View className="px-6 py-4">
                    <ForYou />
                </View>
            </ScrollView>
            <BottomNavigation />
        </View>
    );
}

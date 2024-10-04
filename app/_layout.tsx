import { StyleSheet } from "react-native";
import { Slot, Stack } from "expo-router";
// import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function _layout() {
    return (
        <>
            <SafeAreaView  style={styles.appContainer}>
                <Slot />
            </SafeAreaView>
            <StatusBar style="inverted" />
        </>
    );
}
const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: "white",
    },
});

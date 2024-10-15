import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.appIconContainer}>
                <Image
                    source={require("../assets/app_menu.png")}
                    style={styles.appIcon}
                />
            </View>
            <Image source={require("../assets/profile_picture.jpeg")} style={styles.dp} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    appIconContainer: {
        backgroundColor: "#FFFFFF",
        height: 44,
        width: 44,
        borderRadius: 22,
        justifyContent: "center",
        alignItems: "center",
    },
    appIcon: {
        height: 28,
        width: 28,
    },
    dp: {
        height: 44,
        width: 44,
        borderRadius: 22,
    }
});
export default Header;




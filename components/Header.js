import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>Kyat Dingar</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#5d8263',
        paddingVertical: 20,
        paddingHorizontal: 10,
        marginTop: 25,
    },
    headerTitle: {
        color: 'gold',
        fontSize: 16,
    }
});

export default Header;
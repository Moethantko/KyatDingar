import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#59af66',
        padding: 5,
    },
    text: {
        color: 'white',
        fontSize: 10,
    }
});

const LatestStatus = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.bank}</Text>
            <Text style={styles.text}>{props.lastUpdated}</Text>
        </View>
    );
}

export default LatestStatus;
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Row = (props) => {
    return (
        <View style={styles.row}>
            <View>
                <Text style={styles.abbrevAndRateView}>{ props.abbrev }</Text>
                <Text style={styles.nameAndKyatView}>{ props.name }</Text>
            </View>
            <View style={styles.rateView}>
                <Text style={styles.abbrevAndRateView}>{ props.rate }</Text>
                <Text style={styles.nameAndKyatView}>Kyat</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15, 
        backgroundColor: '#f8f8f8',
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
    },
    rateView: {
        alignItems: 'flex-end',
    },
    abbrevAndRateView: {
        fontSize: 18,
        color: '#273E47'
    },
    nameAndKyatView: {
        fontSize: 10,
        color: '#273E47'
    }
});

export default Row;
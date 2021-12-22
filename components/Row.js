import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Row = (props) => {
    return (
        <View>
            <Text>{ props.name }</Text>
            <Text>{ props.abbrev }</Text>
            <Text>{ props.rate }</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default Row;
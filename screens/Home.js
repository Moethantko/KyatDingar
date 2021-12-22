import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import Row from '../components/Row';

import { CURRENCIES } from '../data/dummy-data';

const renderRows = (itemData) => {
    return (
        <Row name={itemData.item.name} abbrev={itemData.item.abbrev} rate={itemData.item.rate} />
    );
};

const Home = props => {
    return (
        <FlatList 
        data={CURRENCIES} 
        renderItem={renderRows} 
        keyExtractor={item => item.id}/>
    );
};

const styles = StyleSheet.create({

});

export default Home;
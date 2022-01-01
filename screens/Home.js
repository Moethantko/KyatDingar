import React from 'react';
import { StyleSheet, View, Text, FlatList, ActivityIndicator } from 'react-native';
import Header from '../components/Header';
import Row from '../components/Row';
import LatestStatus from '../components/LatestStatus';
import Currency from "../models/currency";


const renderRows = (itemData) => {
    return (
        <Row name={itemData.item.name} abbrev={itemData.item.abbrev} rate={itemData.item.rate} />
    );
};

let CURRENCIES = [];
let lastUpdated = '';
let bank = '';

class Home extends React.Component {

    state = {
        isLoading: true
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {

        let counter = 0;
        
        try {
            const currencyRates = await fetch('http://forex.cbm.gov.mm/api/latest');
            const {rates, timestamp, info} = await currencyRates.json();
    
            const namesAndAbbrev = await fetch('http://forex.cbm.gov.mm/api/currencies');
            const {currencies} = await namesAndAbbrev.json();

            bank = info + '';
            lastUpdated = new Date(timestamp * 1000) + '';
    
            for (const index in rates) {
                 CURRENCIES.push(new Currency(counter, currencies[index], index, rates[index]));
                 counter++;
            }

            this.setState({
                isLoading: false
            });

        } catch (err) {
            console.log(err);
        }
    
    }

    render() {
        return (
            <View>
                <Header />
                <LatestStatus bank={bank} lastUpdated={lastUpdated} />

                <View style={styles.loadingSpinner}>
                    {this.state.isLoading && <ActivityIndicator color={'gold'} size='large' />}
                </View>

                <View>
                    {!this.state.isLoading && <FlatList 
                    data={CURRENCIES} 
                    renderItem={renderRows} 
                    keyExtractor={item => item.id} />}
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    loadingSpinner: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Home;
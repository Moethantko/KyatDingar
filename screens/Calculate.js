import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, TextInput, Button, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import Currency from '../models/currency';
import {Picker} from '@react-native-picker/picker';

let DATA = [];

class Calculate extends React.Component {

    state = {
        isLoading: true,
        inputAmount: '',
        kyatAmount: '0.00',
        selectedCurrency: 'USD',
        data: ''
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {

        try {
            const currencyRates = await fetch('http://forex.cbm.gov.mm/api/latest');
            const {rates, timestamp, info} = await currencyRates.json();

            this.setState({
                data: rates,
                isLoading: false
            })

        } catch (err) {
            console.log(err);
        }
    
    }

    calculate = async () => {

        try {
            let selectedCurrencyRateString = (this.state.data[this.state.selectedCurrency + ''] + '').replace(/,/g,'');
            let selectedCurrencyRateFloat = parseFloat(selectedCurrencyRateString + '');

            let inputAmountFloat = parseFloat(this.state.inputAmount + '');
            let result = selectedCurrencyRateFloat * inputAmountFloat;
            
            //console.log(currentRateFloat);

            this.setState({
                kyatAmount: result + ''
            })
            
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <View>
                <Header />
                <View>
                    {this.state.isLoading && <ActivityIndicator color={'gold'} size='large' />}
                </View>
                <View>
                    {
                        !this.state.isLoading && 
                        <View style={styles.screen}>
                            <TextInput
                            style={styles.input}
                            value={this.state.inputAmount}
                            placeholder='Type Amount Here'
                            onChangeText={(inputAmount) => {
                                this.setState({inputAmount})
                            }} />

                            <Picker
                                style={styles.pickerSelect}
                                selectedValue={this.state.selectedCurrency}
                                onValueChange={(itemValue, itemIndex) =>
                                    {
                                        this.setState({
                                            selectedCurrency: itemValue
                                        });
                                    }
                            }>
                                <Picker.Item label="United States Dollar" value="USD" />
                                <Picker.Item label="Malaysian Ringgit" value="MYR" />
                                <Picker.Item label="Serbian Dinar" value="RSD" />
                                <Picker.Item label="Canadian Dollar" value="CAD" />
                                <Picker.Item label="Pound Sterling" value="GBP" />
                                <Picker.Item label="Swedish Krona " value="SEK" />
                                <Picker.Item label="Norwegian Kroner" value="NOK" />
                                <Picker.Item label="Israeli Shekel" value="ILS" />
                                <Picker.Item label="Australian Dollar" value="AUD" />
                                <Picker.Item label="Danish Krone" value="DKK" />
                                <Picker.Item label="Indian Rupee" value="INR" />
                                <Picker.Item label="Brunei Dollar" value="BND" />
                                <Picker.Item label="EURO" value="EUR" />
                                <Picker.Item label="South Africa Rand" value="ZAR" />
                                <Picker.Item label="Nepalese Rupee" value="NPR" />
                                <Picker.Item label="Chinese Yuan" value="CNY" />
                                <Picker.Item label="Swiss Franc" value="CHF" />
                                <Picker.Item label="Thai Baht" value="THB" />
                                <Picker.Item label="Pakistani Rupee" value="PKR" />
                                <Picker.Item label="Kenya Shilling" value="KES" />
                                <Picker.Item label="Bangaladesh Taka" value="BDT" />
                                <Picker.Item label="Egyptian Pound" value="EGP" />
                                <Picker.Item label="Saudi Arabian Riyal" value="SAR" />
                                <Picker.Item label="Lao Kip" value="LAK" />
                                <Picker.Item label="Indonesian Rupiah" value="IDR" />
                                <Picker.Item label="Cambodian Riel" value="KHR" />
                                <Picker.Item label="Sigapore Dollar" value="SGD" />
                                <Picker.Item label="New Zeland Dollar" value="NZD" />
                                <Picker.Item label="Sri Lankan Rupee" value="LKR" />
                                <Picker.Item label="Czech Koruna" value="CZK" />
                                <Picker.Item label="Japanese Yen" value="JPY" />
                                <Picker.Item label="Vietnamese Dong" value="VND" />
                                <Picker.Item label="Phillipines Peso" value="PHP" />
                                <Picker.Item label="Korean Won" value="KRW" />
                                <Picker.Item label="Brazillian Real" value="BRL" />
                                <Picker.Item label="Honkong Dollar" value="HKD" />
                            </Picker>   

                            <Ionicons name='arrow-down-outline' size={23} />                            
            
                            <View style={styles.kyatResultContainer}>
                                <Text style={styles.kyatResult}>{this.state.kyatAmount}</Text>
                                <Text style={styles.kyatLabel}>   </Text>
                                <Text style={styles.kyatLabel}>Kyat(s)</Text>
                            </View>
            
                            <Button title='Convert' onPress={this.calculate} color='#5d8263' />
                        </View>
                    }
                </View>
            </View>
         );
    }
};

const styles = StyleSheet.create({
    screen: {
        marginTop: 50,
        alignItems: 'center'
    },
    input: {
        height: 40,
        width: 200,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    pickerSelect: {
        width: 250,
        borderStyle: 'solid',
        borderRadius: 10,
        alignItems: 'center'
    },
    kyatResult: {
        marginLeft: 10,
    },
    kyatLabel: {
        
    },
    kyatResultContainer: {
        flexDirection: 'row',
        marginTop: 23,
        marginBottom: 23
    }
});

export default Calculate;
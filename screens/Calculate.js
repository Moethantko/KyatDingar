import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { CURRENCIES } from '../data/dummy-data';
import { Ionicons } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';
import Header from '../components/Header';
import Currency from '../models/currency';

const DATA = [];

CURRENCIES.forEach(item => {
    DATA.push({label: item.name, value: item.abbrev});
})

const Calculate = props => {

    const [inputAmount, setInputAmount] = useState(0);
    const [kyatAmount, setKyatAmount] = useState(0);
    const [selectedCurrency, setSelectedCurrency] = useState('');

    const calculate = () => {

        let rate = 0;

        for (const item of CURRENCIES) {
            if (item.abbrev === selectedCurrency) {
                rate = item.rate;
            }
        }
        let temp = (rate * inputAmount).toString();
        console.log(rate);
        setKyatAmount(temp);
    }

    return (
       <View>
           <Header />
           <View style={styles.screen}>
                <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={inputAmount}
                onChangeText={setInputAmount}/>
                <RNPickerSelect
                    onValueChange={setSelectedCurrency}
                    placeholder={{ label: "Select currency", value: null }}
                    style={styles.pickerSelect}
                    items={DATA}
                    />
                <Ionicons name='arrow-up-outline' size={15} />
                <Ionicons name='arrow-down-outline' size={15} />
                <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={kyatAmount}
                onChange={setKyatAmount} />
                <Text>Kyat (s)</Text>
                <Button title='Convert' onPress={calculate} color='#5d8263' />
            </View>
       </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 40,
        width: 100,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    pickerSelect: {
        fontSize: 14,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, 
        width: 20
    }
});

export default Calculate;
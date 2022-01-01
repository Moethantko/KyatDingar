import Currency from "../models/currency";

//export const CURRENCYDATA = [];

export const FetchData = async (props) => {

    let counter = 0;
    
    try {
        const currencyRates = await fetch('http://forex.cbm.gov.mm/api/latest');
        const {rates, timestamp, info} = await response.json();

        //const namesAndAbbrev = await fetch('http://forex.cbm.gov.mm/api/currencies');
        //const {currencies} = await responseWithFullNames.json();

        const keys = Object.keys(rates);
        //const values = Object.values(rates);

        for (const index in rates) {
             props.data.push(new Currency(counter, 'United States Dollar', item, rates[index]));
             counter++;
        }

    } catch (err) {
        console.log(err);
    }

}
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useBusinesses from '../hooks/useBusinesses';

const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [searchApi, businesses, errorMessage, loading] = useBusinesses();
    const filterResultsByPrice = (price) => {
        return businesses.filter(result => {
            return result.price === price;
        })
    }

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {loading ? <Text>Loading data...</Text> : null}
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            {businesses.length ? <Text>We have found {businesses.length} businesses.</Text> : null}
            <ResultsList results={filterResultsByPrice('$$$')} category="Cost Effective"/>
            <ResultsList results={filterResultsByPrice('$$')} category="Bit Pricier"/>
            <ResultsList results={filterResultsByPrice('$')} category="Big Spender"/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;


import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [businesses, setBusinesses] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        searchApi('pasta');
    }, [])

    const searchApi = async (searchTerm) => {
        console.log('Hi there!');
        try {
            setLoading(true);
            const response = await yelp.get('/search', {
                params: {
                    term: searchTerm,
                    limit: 50,
                    location: 'san jose'
                }
            });
            setLoading(false);
            setBusinesses(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something went wrong...');
        }
    };

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
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;


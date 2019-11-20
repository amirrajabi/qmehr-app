import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {

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

    return [searchApi, businesses, errorMessage, loading];

}
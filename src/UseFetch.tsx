import { useEffect, useState } from 'react';
import axios from 'axios';

function UseFetch(url: string) {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        setLoading(true);
        axios
            .get(url)
            .then(response => {
                setData(response.data);
            })
            .catch(err => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [url]);

    const refetch = () => {
        setLoading(true);
        axios
            .get(url)
            .then(response => {
                setData(response.data);
            })
            .catch(err => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return { data, loading, error, refetch };
}

export default UseFetch;

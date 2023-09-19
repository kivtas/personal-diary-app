import React, { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url).then(res => {
            if(!res.ok) {
                throw Error('Could not fetch data')
            }
            return res.json();
        }).then(data => {
            setData(data);
            setIsPending(false);
            setError(null);
        }).catch(err => {
            setIsPending(false);
            setError(err.message);
        })

        return () => console.log("clean up");
    }, [url]);
    return {data, isPending, error}
}

export default useFetch;
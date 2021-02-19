import {useState, useEffect} from 'react';

function useFetch(myFetch) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect( ()=> {
      async function fetchData() {
        setLoading(true);
        setError();
        const data = await myFetch();
        setData(data)
        setLoading(false);
      }
      fetchData();
    }, []);
    return [data, loading, error]
}

export {useFetch};
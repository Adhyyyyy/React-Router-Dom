import {useState, useEffect} from "react";

function useFetch(url){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        if(!url) return null;

        setLoading(true);
        setError(null);

        fetch(url)
        .then((res)=>{
            if(!res.ok){
                throw new Error("Network response was not ok");
            }
            return res.json();
        })
        .then((data)=> setData(data))
        .catch((err)=> setError(err.message))
        .finally(()=> setLoading(false));
    },[url]);

    return {data, loading, error};
}

export default useFetch;
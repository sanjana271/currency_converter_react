import { useEffect, useState } from "react";

function useCurrencyinfo(currency){
    const [data, setData]= useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))//if currency is 'USD', it retrieves the data for the US Dollar from the response.
        //ji currency ahe ticha jo response ahe to setdata madhun data la jail.
        //like res[curr] means res ke andar se currency ki value
    },[currency])
    return data;
}

export default useCurrencyinfo; 
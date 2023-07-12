import axios from "axios";

import { useEffect, useState } from "react"

import { Url } from '../Url'

const useFetch = (endpoint)=>{
    const [data, setData ] = useState({
        isFetched: false,
        error: null,
        data:[]
    
    });

    useEffect(()=>{
        axios
        .get(`${Url}/${endpoint}`)
        .then((data)=>{
            setData({
                isFetched: true,
                error:null,
                data: data.data,
            });
        })
        .catch((err)=>{
            setData({
                isFetched: false,
                error:err,
                data: []
            })
        })
    }, []);

    return {data}
}

export default useFetch;
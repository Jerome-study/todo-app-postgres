import { useEffect, useState } from "react";
import { instance } from "../utils/utils";



export const useFetch = (url: string) => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<any | null>();
    const [error, setError] = useState<any>()

    useEffect(() => {
        let running = true;
        setLoading(true);
        const getData = async () => {
            try {
                const response = await instance.get(url);
                if (running) {
                    setData(response.data);
                    setLoading(false)
                }   
            } catch(error) {
                setError(error);
                setLoading(false)
            }
        }
        getData();
        return () => {
            running = false;
        }

    }, [url]);

    const refetch = () => {
        setError(undefined)
        setLoading(true)
        const getData = async () => {
            try {
                const response = await instance.get(url);
                setData(response.data);
                setLoading(false)
            } catch(error) {
                setError(error);
                setLoading(false)
            }
        }
        getData();
    }

    return { data, loading, error, refetch }
}
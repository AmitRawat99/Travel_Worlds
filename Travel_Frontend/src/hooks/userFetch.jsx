import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setdata] = useState(null)
    const [error, seterror] = useState(null)
    const [loading, setloading] = useState(true)

    useEffect(() => {
        const fatchData = async () => {
            setloading(true)

            try {
                const result = await fetch(url)

                if (!result) {
                    seterror("Failed To Fatch")
                    alert('Failed To Fatch')
                }
                const response = await result.json()
                setdata(response.data)
                setloading(false)
            } catch (error) {
                seterror(error.message)
                setloading(false)
            }
        }
        fatchData();
    }, [url]);
    return {
        data,
        error,
        loading
    }
}

export default useFetch;
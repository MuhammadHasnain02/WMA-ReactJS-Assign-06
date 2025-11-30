import { useEffect, useState } from 'react'

export const useFetch = (url) => {

    const [data , setData] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const timer = setTimeout(() => {

            setIsLoading(true);

            fetch(url).then((response) => {

                if (!response.ok) throw new Error("Error: URL Mistake")
                return response.json()

            }).then((data) => {
            
                setData(data)
                setIsLoading(false);
                console.log("Fetched Data:", data);
            
            })
            .catch((error) => {
                console.log(error.message)
                setIsLoading(false);
            })
            
        }, 700);

    } , [url])


    return { data, isLoading };
}

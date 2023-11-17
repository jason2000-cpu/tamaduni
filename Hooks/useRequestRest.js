import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';


function useRequestRest(){
    const [status, setStatus] = useState(false);
    const searchParams = useSearchParams();
    const [info, setInfo] = useState(null);

    const culture = searchParams.get('culture');
    const aspect = searchParams.get('aspect');
    const params = `?culture=${culture}&aspect=${aspect}`
    let url = "http://localhost:3000/api"; 


    useEffect(() => {
        async function getData(){
            try {
                await fetch(`${url}${params}`)
               .then(res => res.json())
               .then(data =>{
                   setInfo(data);
                   setStatus(true);
                   console.log("DATA ::::",data);   
               })
               .catch((error) => {
                   console.error('Error:', error);
               });
            } catch (error) {
                console.error(error);
            }
        }
       getData();
    }, [culture, aspect]); 
    
    return { status, info, aspect }
}

export default useRequestRest;
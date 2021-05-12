import {useEffect,useState} from 'react'


const useFetch =(url) => {
	 const [news,setNews]= useState([])
	 const [error,setError]=useState()
	 const [isloading,setIsloading] = useState(false)



   useEffect(()=>{
   	         setIsloading(true)
             fetch(url)
            .then(response =>{
              if(!response.ok){
                setIsloading(false)
               	throw Error('could not fetch data')
                        	}
             return response.json()}
             )
            .then(data => {setNews(data.results)
             setIsloading(false)
             })
            .catch(err=>setError(err.message));
},[])

   return {news,error,isloading}
}
export default useFetch
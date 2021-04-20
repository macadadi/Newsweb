import {createContext,useContext,useEffect,useState} from 'react'



const NewsContext = createContext()

export function useNews(){
	return useContext(NewsContext)
}

export function NewsProvider({children}){
	 const ur="9ec65c43ffa11b5ca709a915a1a05075"
		 const [news,setNews]= useState([])
		 const [isloading,setIsloading] = useState(false)
	
	
		  const country = ['United State','Naigeria','Zambia','Australia','Belgium','France','South Africa','Kenya','China','Britain']

       
   useEffect(()=>{
   	         setIsloading(true)
             fetch(`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=SkrAvDwdsMERKJLJ4enVtSFC3u4vqA48`)
            .then(response => response.json())
            .then(data => {setNews(data.results)
            	setIsloading(false)}).catch(err=>console.log(err));
},[])
const value ={country,isloading,news}

	return(<NewsContext.Provider value={value}>
		{children}
		</NewsContext.Provider>)
}
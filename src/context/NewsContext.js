import {createContext,useContext,useEffect,useState} from 'react'



const NewsContext = createContext()

export function useNews(){
	return useContext(NewsContext)
}

export function NewsProvider({children}){
	 const ur="9ec65c43ffa11b5ca709a915a1a05075"
		 const [news,setNews]= useState('it is me')
		 const [isloading,setIsloading] = useState(false)
	
		  const country = ['United State','Naigeria','Zambia','Australia','Belgium','France','South Africa','Kenya','China','Britain']

		 function checkdata(str,num) {
		 	if(str.length>20){
		 		return(str.substring(0,num) + '  read more ...')
		 	}return str
		 }
       
   useEffect(()=>{
   	         setIsloading(true)
             fetch(`http://api.mediastack3.com/v1/news?access_key=${ur}&languages=en`)
            .then(response => response.json())
            .then(data => {setNews(data.data)
            	setIsloading(false)}).catch(err=>console.log(err));
},[])
const value ={country,isloading,news,checkdata}

	return(<NewsContext.Provider value={value}>
		{children}
		</NewsContext.Provider>)
}
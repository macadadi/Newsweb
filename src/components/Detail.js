import {Link,useHistory,useParams} from 'react-router-dom'
import {useNews} from '../context/NewsContext'
import useFetch from  '../context/useFetch'
import Topnews from './Topnews'
function Detail(argument) {
	const {para} =useParams()
	const KEY = process.env.REACT_APP_NEWS_KEY
	 const option= ['home','world']
	const {news,error,isloading} = useFetch(`https://api.nytimes.com/svc/topstories/v2/${option[0]}.json?api-key=${KEY}`)
	
	return(<div>



		 <div class="container">
  
  <div class="row rowdiv">

  {isloading && !error ? <div> <div class="loader">Loading...</div></div>  :error ? <h1>Sorry we could
   not fetch the data, try refreshing your browser
  </h1> : news.map((t,index)=><Topnews country={t.geo_facet[0] ? t.geo_facet[0] : 'Briefing'} id={index} 
  key={index} title={t.title} description={t.abstract} imgurl={t.multimedia?.[0]?.url } url={t?.short_url}/>)}

   </div> 
 
</div></div>)
}
export default Detail
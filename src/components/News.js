import './news.css'
import {useState,useEffect} from 'react'
import Topnews from './Topnews'
import FeaturedStories from './FeaturedStories'
import MoreStories from './MoreStories'
import {useNews} from '../context/NewsContext'


function News(argument) {
const {country,isloading,news,checkdata}= useNews()
  return(<div>
    <div class="container">
  
  <div class="row rowdiv">
  {console.log(news)}
  {isloading ? 'loading ' : news.map((t,index)=><Topnews country={t.geo_facet[0] ? t.geo_facet[0] : 'Briefing'} id={index} 
  key={index} title={t.title} description={checkdata( t.abstract,60)} imgurl={t.multimedia[2].url}/>)}

   </div> 
     <div class="row rowdiv">
    <div class="col-md-3 news-highlite">
 <h3> More News </h3>
    </div>
    <div className="col-md-9 empty-div">
    </div>
  </div>
 


    <div class="row rowdiv">
    ----------------------------------------------------------------------
 


   </div> 
   
  <div class="row rowdiv">
    <div class="col-md-3 news-highlite">
 <h3> Top news </h3>
    </div>
    <div className="col-md-9 empty-div">
    </div>
  </div>

    <div class="row rowdiv">
    -----------------------------------------------------------------------------------
 


   </div> 

</div>
</div>)
}
export default News
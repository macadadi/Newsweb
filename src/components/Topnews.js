import {Link,useHistory} from 'react-router-dom'
import {useState} from 'react'


function TopNews(props) {
	const {title,imgurl,description,country,id,url} = props
	const history = useHistory()
	const [num,setNum]= useState(80)

		 function checkdata(str,num) {
		 	function handlebtn(){
		 		{num < 100 ? setNum(1200) : setNum(80) }
		 	}
		 	if(str.length>20){

		 		return(<>{str.substring(0,num)} <button className='handlebtn' onClick={handlebtn}>{num < 100 ? 'read more ...' : ' less..'}</button> </>)
		 	}return str
		 }
	function handleclick(e) {

		history.push('/detail')
		return(console.log('hi there'))
	}

	return(<div class="col-md-4 continent">
      <h3>{country}</h3>
		<div>
		<img src={imgurl} alt='no image' />
		<div className='news-header'>
		<h4><a href={url} className='link'>{title} </a></h4></div>
		<div className='news-body'><h3>{checkdata(description,num)}</h3></div>

		</div>
    </div>)
}
export default TopNews
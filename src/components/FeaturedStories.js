import {Link,useHistory} from 'react-router-dom'
function FeaturedStories(props) {
	const {title,imgurl,description,country,id} = props
	const rand = Math.floor(Math.random() * 10)
	const history =useHistory()

	function handleclick(e) {

	history.push('/detail')
	return(console.log('hi there'))
	}
	return(
		     <div class="col-md-4 continent">
     <h3>{country[rand]}</h3>
		<div>
		<img src={imgurl} alt='no image' />
		<div className='news-header'>
		<Link to='#' onClick={handleclick}><h4>{title}</h4></Link></div>
		<div className='news-body'><h3>In its1 latest lurch to the far right, Denmark plans to send some refugees back to Syria</h3></div>
		
		</div>
    </div>
		)
}
export default FeaturedStories
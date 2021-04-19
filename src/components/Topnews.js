import {Link,useHistory} from 'react-router-dom'


function TopNews(props) {
	const {title,imgurl,description,country,id} = props
	const rand = Math.floor(Math.random() * 10)
	const history = useHistory()
	function handleclick(e) {

		history.push('/detail')
		return(console.log('hi there'))
	}

	return(<div class="col-md-4 continent">
      <h3>{country[rand]} {id}</h3>
		<div>
		<img src={imgurl} alt='no image' />
		<div className='news-header'>
		<h4><Link onClick={handleclick}>{title} </Link></h4></div>
		<div className='news-body'><h3>{description}</h3></div>
		<div className='news-body'><h3>In its 2latest lurch to the far right, Denmark plans to send some refugees back to Syria</h3></div>

		</div>
    </div>)
}
export default TopNews
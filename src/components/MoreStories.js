import {Link,useHistory} from 'react-router-dom'

function MoreStories(props) {
	const {title,imgurl,description,country,id} = props
	const history = useHistory()
	const rand = Math.floor(Math.random() * 10)

		function handleclick(e) {

		history.push(`/detail/${id}`)
		return(console.log('hi there'))
	}
	return(<div class="col-md-4 continent">
     <h3>{country[rand]}</h3>
		<div>
		<img src={imgurl} />
		<div className='news-header'>
		<h4><Link to = '#' onClick={handleclick}>{title} </Link></h4></div>
		
		</div>
    </div>
)
}

export default MoreStories
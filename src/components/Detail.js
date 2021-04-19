import {Link,useHistory} from 'react-router-dom'
import {useNews} from '../context/NewsContext'
function Detail(argument) {
	const {country,isloading,news}= useNews()
	return(<div>am the detail page
<br/>
{console.log(news)}
<br/>
		<Link to='/'>Home</Link></div>)
}
export default Detail
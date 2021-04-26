
import NavBar from './components/NavBar'
import Detail from './components/Detail'
import fake from './components/fake'
import News from './components/News'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import {NewsProvider} from './context/NewsContext'
import './App.css'

function App() {

  return (
    <div  className='App'>
    <NewsProvider>
    <Router>
     <NavBar />
     <Switch>
    
     <Route  exact path='/' component={News} />
     <Route path ='/detail' component={Detail} />
     
   
     </Switch>
     </Router>
     </NewsProvider>
    </div>
  );
}

export default App;

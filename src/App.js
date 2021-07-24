// import pages
import Home from './pages/Home'
import About from './pages/About'
import Approach from './pages/Approach'
import Services from './pages/Services'
import News from './pages/News'
import Contact from './pages/Contact'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import {Route, Link} from 'react-router-dom'
import Clients from './pages/Clients'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/approach" component={Approach} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/clients" component={Clients} />
      <Route exact path="/news" component={News} />
      <Route exact path="/contact" component={Contact} />
      <Footer/>
    </div>
  );
}

export default App;
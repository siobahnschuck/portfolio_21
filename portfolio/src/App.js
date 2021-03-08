import './App.css'
import { Switch, Route } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Introduction from './components/Introduction'
import Projects from './components/Projects'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Introduction} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
    </div>
  )
}

export default App

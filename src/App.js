import './App.css'
import Menu from './components/Menu/Menu'
import Content from './components/Container/Content/Content'
import Greeting from './components/Container/Greeting'
import Button from './components/Button/Button'
import registration from './images/registration.svg'
function App() {
  return (
    <div className="App">
      <Menu />
      {/* <Greeting /> */}
      <Content />
    </div>
  )
}

export default App

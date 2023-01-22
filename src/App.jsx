import Navbar from './components/Navbar'
import Main from './components/Main/Main'

import './css/App.css'

const GMAIL = "mailto:villarazobermar@gmail.com"

function App() {

  return (
    <div className="App roots">
      <Navbar GMAIL={GMAIL}/>
      <Main GMAIL={GMAIL}/>
    </div>
  )
}

export default App

import React, {useState} from 'react'
import './App.css'
import Laskuri from './Laskuri'
import Viesti from './viesti'
import Posts from './Posts'



const App = () => {
  //App komponentin tila

const[showLaskuri, setshowLaskuri] = useState(false)

const huomio = () => {
  alert ("Huomio!")
}

  return (
    <div className="App">
      <h1>Hello from React!</h1>

      <Posts/>
          

      {showLaskuri && <Laskuri huomio={huomio} />}

      {showLaskuri && <button onClick={() => setshowLaskuri(!showLaskuri)}>Piilota laskuri</button>}

      {!showLaskuri && <button onClick={() => setshowLaskuri(!showLaskuri)}>Näytä laskuri</button>}

      <Viesti teksti="tervehdys app komponentista" />

    
    </div>
  )
}

export default App

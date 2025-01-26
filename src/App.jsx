
import { useState } from 'react'
import './App.css'
// import Default from './components/default.jsx';

//import Product from './screens/Product.jsx'
// import Home from '/src/screens/Home.jsx';
// import Counter from '/src/components/Counter/counter.jsx';

import Navigator from './components/Navigation/Navigator.jsx'
import Router from './components/Navigation/Router.jsx'

function App() {
 
  const [count, setCount] = useState(0)
  return (
    <>
     {/* <Home/>
     <Counter/> */}
     <Navigator/>
      <Router/>
    </>
  )
}

export default App

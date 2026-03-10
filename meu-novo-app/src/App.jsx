import { useState } from 'react'
import Header from './components/header'
import Main from './components/main'
import Footer from'./components/footer'
import Serviços from './components/serviços'



 function App() {
  const [count, setCount] = useState(0)

   
  return (
   <div>
   <Header/>
   <Main/>
   <Footer/>
   
   </div>

   
  )
}

 function App2() {
  const [count, setCount] = useState(0)

   
  return (
   <div>
   <Serviços/>
   
   </div>

   
  )
}

export default App2


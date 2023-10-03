import { useState } from 'react'


import Sidbar from './Components/Sidbar'
import Todos from './Components/Todos'


function App() {




  return (
    <div className='flex'>
    <Sidbar/>
    <Todos/>
    </div>
  )
}

export default App

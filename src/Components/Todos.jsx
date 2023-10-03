import React from 'react'
import Doingbox from './Doingbox'
import Donbox from './Donbox'
import Todobox from './Todobox'
import TitleTask from './TitleTask'

export default function Todos() {
  return (
    <div className="h-screen flex-1 p-7">
        <h1 className="text-4xl font-extrabold italic text-violet-950">TODOS:</h1>

        
         <div className='flex justify-around items-center mt-4'>
         <Todobox/>
         <Doingbox/>
         <Donbox/>


        </div>
      </div>
  )
}

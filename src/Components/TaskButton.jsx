import React from 'react'

export default function TaskButton({setShowModal}) {
  return (
    <button className=' bg-dark-purple text-white py-5 px-20 rounded-md text-2xl  origin-top-right '
    onClick={ ()=>setShowModal(true)} > ADD TASK</button>
  )
}

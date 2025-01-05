import { PlusIcon } from 'lucide-react'
import React from 'react'

const PlusButton = () => {
  return (
      <button className='h-[24.25rem] shadow-md rounded-md bg-card flex justify-center items-center'>
          <PlusIcon className='text-accent size-40'/>
    </button>
  )
}

export default PlusButton
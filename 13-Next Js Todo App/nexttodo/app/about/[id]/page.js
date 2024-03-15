
import { notFound } from 'next/navigation'

import React from 'react'

const details = [
    { id: 1, name: 'Yash', role: 'Senior Developer' },
    { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
    { id: 3, name: 'Suresh', role: 'Frontend Developer' },
  ]



const page = ({params}) => {

   const person =details.find((each)=>each.id=== parseInt(params.id) )

   if(!person)
   {
    notFound()
   }
   
  return (
    <div>

      <h1>{person.name}</h1>
      <h1>{person.role}</h1>

    </div>
  )
}

export default page
import React from 'react'
import { recipes } from './assets/data'
import Recipeses from './Recipeses'


export default function RecipiesList() {

 


  return (
    <div>
        {
            recipes.map(recepi =>
               
                <Recipeses {...recepi} key={recepi.id}/> 
                
  )
           
        }
        
    </div>
  )
}

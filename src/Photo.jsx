import React from 'react'

import { getImageUrl } from './assets/utils';
import { people } from './assets/data';

export default function Photo() {
    const listItems=people.map(person=>{
        <li key={person.id}>
            <img
            src={getImageUrl(person)} 
            />
            <b>{person.name}:</b>
            
        </li>
    })

        return (
        
        )
}

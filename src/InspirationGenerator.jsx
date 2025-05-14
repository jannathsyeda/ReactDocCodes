import React, { useState } from 'react'
import FancyText from './FancyText';
import { quotes } from './assets/data';



export default function InspirationGenerator({children}) {

    const [index, setIndex]=useState(0);
    const quote=quotes[index]
    const next =()=> setIndex(( 1 + index) % quotes.length);
    console.log(next);

  return (
    <>
    <p>Your inspirational quote</p>
    <FancyText text={quote}/>
    <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={next}>inspire me</button>

    {children}

    </>
  )
}

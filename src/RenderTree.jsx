import React from 'react'
import FancyText from './FancyText'
import InspirationGenerator from './InspirationGenerator'
import CopyRight from './CopyRight'
export default function RenderTree() {
  return (
    <>
    <FancyText title text="Get inspire app" />

    <InspirationGenerator>
        <CopyRight year ={2025}/>
    </InspirationGenerator>
    </>
  )
}

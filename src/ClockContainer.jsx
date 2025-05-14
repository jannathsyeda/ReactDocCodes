import React, { useEffect, useState } from 'react'
import Clock from './Clock';


export default function ClockContainer() {

    const [currentTime, setCurrentTime]=useState(new Date());

        useEffect(()=>{
            const intervalId=setInterval(()=>{
                setCurrentTime(new Date())

            },1000)

            return ()=> clearInterval(intervalId)

        },[])

  return (
    <div className='clockContainer'>
        <Clock  time={currentTime}/>
    </div>
  )
}

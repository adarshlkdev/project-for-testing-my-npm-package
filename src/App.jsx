import React, { useEffect } from 'react'
import './index.css'
import {Log} from "adarshlkdev-colorish"
function App() {
  useEffect(() => { 
    Log.success('This is a success message')
    Log.error('This is an error message')
    Log.warning('This is a warning message')
    Log.info('This is an info message')
  }, [])
  
  return (
    <div className='container'>
       <h2 className='text-center'>Check console for quick demo of npm package</h2>
      </div>
  )
}

export default App


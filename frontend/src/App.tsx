import { useState } from 'react'
import { Button } from './components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='min-h-lvh flex flex-col justify-center items-center'>
        <span>{count}</span>
        <Button onClick={() => setCount(prev => prev + 1)}>Add</Button>
      </div>
    </>
  )
}

export default App

import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { CounterWithUseRef } from './counter'

const App = () => {
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter + 1)
    }, 3000)

    return () => {
      clearInterval(interval)
    }
  }, [counter])

  return (
    <div>
      {/*{counter < 3 && <Greetings name="Brian" tick={counter} />}*/}
      {/*{counter < 3 && <GreetingsFn name="Brian" tick={counter} />}*/}
      {/*<CounterAsReducer />*/}
      {/*<CounterWithEffect />*/}
      {/*<CounterWithUseMemo />*/}
      <CounterWithUseRef />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('app'))

root.render(<App />)

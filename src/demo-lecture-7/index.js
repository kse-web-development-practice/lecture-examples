import React, { useEffect, useState } from 'react'
import { Greetings } from './classComponent'

export const Lecture7 = () => {
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
      {counter < 3 && <Greetings name="Brian" tick={counter} />}
      {/*{counter < 3 && <GreetingsFn name="Brian" tick={counter} />}*/}
      {/*<CounterAsReducer />*/}
      {/*<CounterWithEffect />*/}
      {/*<CounterWithUseMemo />*/}
      {/*<CounterWithUseRef />*/}
      {/*<Catalog />*/}
    </div>
  )
}

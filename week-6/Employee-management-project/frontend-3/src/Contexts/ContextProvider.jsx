import { createContext, useState } from 'react'

// context init
export const counterContext = createContext()

function ContextProvider({ children }) {
  // states
  const [counter, setCounter] = useState(10)
  const [counter1, setCounter1] = useState(10)

  // update fns
  const changeCounter = () => {
    setCounter(counter + 1)
  }
  const changeCounter1 = () => {
    setCounter1(counter1 + 1)
  }

  return (
    <counterContext.Provider value={{ counter, counter1, changeCounter, changeCounter1 }}>
      {children}
    </counterContext.Provider>
  )
}

export default ContextProvider

import React, { useReducer, createContext, useContext, useRef } from "react"

function resReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.res)
    case "TOGGLE":
      return state.map((res) =>
        res.id === action.id ? { ...res, done: !res.done } : res
      )
    case "REMOVE":
      return state.filter((res) => res.id !== action.id)
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

const ResStateContext = createContext()
const ResDispatchContext = createContext()
const ResNextIdContext = createContext()

export function ResProvider({ children }) {
  const [state, dispatch] = useReducer(resReducer, [])
  const nextId = useRef(1)

  return (
    <ResStateContext.Provider value={state}>
      <ResDispatchContext.Provider value={dispatch}>
        <ResNextIdContext.Provider value={nextId}>
          {children}
        </ResNextIdContext.Provider>
      </ResDispatchContext.Provider>
    </ResStateContext.Provider>
  )
}

export function useResState() {
  const context = useContext(ResStateContext)
  if (!context) {
    throw new Error("Cannot find ResProvider")
  }
  return context
}

export function useResDispatch() {
  const context = useContext(ResDispatchContext)
  if (!context) {
    throw new Error("Cannot find ResProvider")
  }
  return context
}

export function useResNextId() {
  const context = useContext(ResNextIdContext)
  if (!context) {
    throw new Error("Cannot find ResProvider")
  }
  return context
}

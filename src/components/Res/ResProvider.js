import React, { useEffect, useReducer, createContext, useContext } from "react"

function resReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.res)
    case "TOGGLE":
      return state.map((res) =>
        res.id === action.id ? { ...res, checked: !res.checked } : res
      )
    case "REMOVE":
      return state.filter((res) => res.id !== action.id)
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

const ResStateContext = createContext()
const ResDispatchContext = createContext()

export function ResProvider({ children }) {
  const [state, dispatch] = useReducer(resReducer, [])

  return (
    <ResStateContext.Provider value={state}>
      <ResDispatchContext.Provider value={dispatch}>
        {children}
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

import React, { createContext } from 'react'
import reducer, { typeState } from './reducer'
import { initialState } from './reducer'
import { ACTIONTYPE } from './action'


export const context = createContext<{state: typeState; dispatch: React.Dispatch<ACTIONTYPE>}>({
  state: initialState,
  dispatch: () => undefined
})

const Provider = ({children}: any) => {

 const [state, dispatch] = React.useReducer(reducer, initialState);
 
 return (
    <context.Provider value={{state, dispatch}}>
        {children}
    </context.Provider>
  )
}

export default Provider
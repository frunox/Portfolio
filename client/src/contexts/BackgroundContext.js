import React, { useState } from 'react';

const BackgroundContext = React.createContext();

// create a provider component
export const BackgroundProvider = props => {
  const [state, setState] = useState({
    notHome: false,
  });

  return (
    <BackgroundContext.Provider value={
      {
        state: state,
        updateNotHome: (value) => {
          // console.log('setupCtx updateDevUpdated', value)
          setState({
            ...state,
            notHome: value
          })
        }
      }
    }>
      {props.children}
    </BackgroundContext.Provider>
  )
}

export default BackgroundContext;
import React, { createContext } from 'react'
import { Apartments } from '.';

export const AppartsContext = createContext<Apartments | null>(null);

const apparts = new Apartments();

const AppartsProvider = ({children}: {children: React.ReactNode}) => {
  return (
    <AppartsContext.Provider value={apparts}>
        {children}
    </AppartsContext.Provider>
  )
}

export default AppartsProvider
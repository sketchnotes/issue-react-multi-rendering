import React, { createContext, useState } from 'react';

type IUserState = {
  isLoading?: boolean,
  isLoggedIn?: boolean | null,
  currentUser?: object | null,
};

type ICurrentUserContext = [IUserState, React.Dispatch<React.SetStateAction<IUserState>>];

const CurrentUserContext = createContext<ICurrentUserContext>([{}, () => null]);

const CurrentUserProvider = ({ children }: {children: any}) => {
  const [state, setState] = useState<IUserState>({
    isLoading: false,
    isLoggedIn: null,
    currentUser: null,
  })

  return (
    <CurrentUserContext.Provider value={[state, setState]}>
      { children }
    </CurrentUserContext.Provider>
  )
};

export {
  CurrentUserContext,
  CurrentUserProvider,
}
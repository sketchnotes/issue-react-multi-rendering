import { useEffect, useContext } from 'react';
import { useLazyQuery, gql } from '@apollo/client';
import { CurrentUserContext } from './currentUser';

const FILM = gql`
  {
    allFilms {
      id
      director
    }
  }
`
const CurrentUserChecker = ({ children }: {children: any}) => {
  const [, setCurrentUserState] = useContext(CurrentUserContext);
  const [getAuthor, { data }] = useLazyQuery(FILM);
  console.log('CurrentUserChecker');
  
  useEffect(() => {

    if (!localStorage.getItem('auth_token')) {
      
      setCurrentUserState((state: any) => ({
        ...state,
        isLoggedIn: false,
        currentUser: null
      }))
      
      return
    }

    getAuthor();
    
    if (data) {

      setCurrentUserState((state: any) => ({
        ...state,
        isLoading: false,
        isLoggedIn: true,
        currentUser: data.allFilms
      }))
    } else {

      setCurrentUserState((state: any) => ({
        ...state,
        isLoading: true,
      }))
    }

  }, [getAuthor, data, setCurrentUserState]);

  return children;
};

export { CurrentUserChecker }
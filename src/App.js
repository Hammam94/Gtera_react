import { BrowserRouter } from 'react-router-dom';

import { AuthRoutes, LoggedInRoutes } from './routes';
import AppLayout from './components/Layout';
import {get} from './library/utilities/Storage'
import { useQuery, gql } from '@apollo/client';

export default function App() {
  const {data} = useQuery(gql`
    query currentUser {
      fetchCurrentUser {
        id
        email
        roles {
          id
          name
        }
      }
    }
  `,{
    onCompleted: (response) => {
      console.log(response);
    },
    onError: (error) => {
      console.log(error);
    }
  })

  console.log(data);
  const isLoggedIn = () => !!get('token');

  const getUserInfo = () => data && <LoggedInRoutes userInfo={data.fetchCurrentUser} />;

  return (
    <BrowserRouter>
      { !isLoggedIn() && <AuthRoutes /> }
      { isLoggedIn() && 
        <AppLayout 
          appContent={getUserInfo()} 
        />
      } 
    </BrowserRouter>
  )
};

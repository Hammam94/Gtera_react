import { Switch, Route } from 'react-router-dom';
import LoginForm from '../pages/LoginForm';
import UsersRoutes from './users';
import ProductsRoutes from './products';

export const LoggedInRoutes = (props) => {
  return (
    <Switch>
      {UsersRoutes(props)}

      {ProductsRoutes(props)}
    </Switch>
  );
};

export const AuthRoutes = () => {
  return (
    <Switch>
      <Route path='/' component={LoginForm}/>
    </Switch>
  );
};

export default {
  AuthRoutes,
  LoggedInRoutes
};

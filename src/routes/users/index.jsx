import UserForm from '../../pages/UserForm';
import Users from '../../pages/Users';
import RouterProxy from '../RouterProxy';

const UserRoutes = (props) => {
	return ([
    <RouterProxy 
      path='/users' 
      component={Users} 
      type="productRoutes"
      action="index"
      userInfo={props.userInfo} 
      exact
    />,
    <RouterProxy 
      path='/users/new' 
      component={UserForm} 
      type="productRoutes"
      action="new"
      userInfo={props.userInfo} 
      exact
    />,
  ])
}

export default UserRoutes;

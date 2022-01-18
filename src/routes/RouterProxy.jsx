import PageNotFound from '../pages/PageNotFound';
import { Route } from 'react-router';
import guards from './guard'

const RouterProxy = (props) => {
	// const CurrentComponent = ;

	const isAuthorized = () => {
		const permissions = guards[props.type] || [];
		const actions = props.userInfo?.roles.reduce((arr, role) => {
			arr.push(permissions[role.name])
			return arr;
		}, []).flat();
		console.log('actions', actions, props.path);
		return actions.includes(props.action) || actions.includes('all');
	}
	const getRoute = () => <Route path={props.path} component={props.component}/>;

	const getCurrentRoute = () => (isAuthorized() && getRoute()) || <Route component={PageNotFound}/>;

	return (
		<>
			{getCurrentRoute()}
		</>
	);
}

export default RouterProxy

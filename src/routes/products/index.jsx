import ProductForm from '../../pages/ProductForm';
import ProductReqeusts from '../../pages/ProductRequests';
import Products from '../../pages/Products';
import RejectedProducts from '../../pages/RejectedProduct';
import RouterProxy from '../RouterProxy';

const ProductRoutes = (props) => {
	return ([
    <RouterProxy 
      path='/products/pending' 
      component={ProductReqeusts} 
      type="productRoutes"
      action="showPendingProducts"
      userInfo={props.userInfo} 
      exact
    />,
    
    <RouterProxy 
      path='/products' 
      component={Products} 
      type="productRoutes"
      action="showApprovedProducts"
      userInfo={props.userInfo} 
      exact
    />,

    <RouterProxy 
      path='/products/rejected' 
      component={RejectedProducts} 
      type="productRoutes"
      action="showRejectedProducts"
      userInfo={props.userInfo} 
      exact
    />,

    <RouterProxy 
      path='/products/new' 
      component={ProductForm} 
      type="productRoutes"
      action="new"
      userInfo={props.userInfo} 
      exact
    />,    
  ])
}

export default ProductRoutes;

import { gql, useQuery } from "@apollo/client";
import { Button, Table } from "antd";
import {useHistory} from "react-router-dom"
const Products = () => {

  const {data} = useQuery(gql`
    query products {
      fetchApprovedProducts {
        id
        name
        description
      }
    }
  `);
  const history = useHistory();
  const goToProductForm = () => history.push('/products/new')

  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'description',
      dataIndex: 'description',
      key: 'description',
    },
  ];

  return (
    <>
      <Button onClick={goToProductForm}style={{margin: 20}}>Create New Product</Button>
      <Table dataSource={data?.fetchApprovedProducts || []} columns={columns} />
    </>
  )
};

export default Products;
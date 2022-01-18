import { gql, useMutation, useQuery } from "@apollo/client";
import { Button, Table } from "antd";

const ProductReqeusts = () => {

  const {data} = useQuery(gql`
    query pendingProducts {
      fetchPendingProducts {
        id
        name
        description
      }
    }
  `);

  const [approveProduct] = useMutation(gql`
    mutation approveProduct ($id: ID!) {
      approveProduct(input: { params: {
        id: $id
      }}) {
        product {
          id
          name
          approved
          rejected
        }
      }
    }
  `, {
    onCompleted: (response) => {
      console.log(response);
    }
  });

  const [rejectProduct] = useMutation(gql`
    mutation rejectProduct ($id: ID!) {
      rejectProduct(input: { params: {
        id: $id
      }}) {
        product {
          id
          name
          approved
          rejected
        }
      }
    }
  `, {
    onCompleted: (response) => {
      console.log(response);
    }
  });

  const onApprovePress = (id) => approveProduct({ variables: {id} })  
  const onRejectPress = (id) => rejectProduct({ variables: {id} })  

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
    { 
      title: "Approve",
      render: (text, record) => 
        <Button type="primary" onClick={() => onApprovePress(record.id)}> Approve </Button>
    },
    { 
      title: "Reject",
      render: (text, record) => 
        <Button onClick={() => onRejectPress(record.id)} danger> Reject </Button>
    }
  ];

  return (
    <Table dataSource={data?.fetchPendingProducts || []} columns={columns} />
  )
};

export default ProductReqeusts;
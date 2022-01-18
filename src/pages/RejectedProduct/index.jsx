import { gql, useMutation, useQuery } from "@apollo/client";
import { Button, Table } from "antd";

const RejectedProducts = () => {

  const {data} = useQuery(gql`
    query rejectedProducts {
      fetchRejectedProducts {
        id
        name
        description
      }
    }
  `);

  const [deleteProduct] = useMutation(gql`
    mutation deleteProduct ($id: ID!) {
      deleteProduct(input: { params: {
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

  const onDeletePress = (id) => deleteProduct({ variables: {id} }) 

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
      title: "Delete",
      render: (text, record) => 
        <Button danger onClick={() => onDeletePress(record.id)}> Delete </Button>
    }
  ];

  return (
    <Table dataSource={data?.fetchRejectedProducts || []} columns={columns} />
  )
};

export default RejectedProducts;
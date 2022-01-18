import { gql, useQuery } from "@apollo/client";
import { Table, Button } from "antd";
import { useHistory } from "react-router";

const Users = () => {

  const {data} = useQuery(gql`
    query users {
      fetchUsers {
        id
        email
        roles {
          id
          name
        }
      }
    }
  `);

  const history = useHistory();
  const goToUserForm = () => history.push('/users/new');
  const columns = [
    { 
      title: "Id", 
      key: 'id',
      render: (text, record) => record.id
    },
    { 
      title: "email", 
      key: 'code',
      render: (text, record) => record.email
    },
    { 
      title: 'Roles', 
      key: 'name' ,
      render: (text, record) => record.roles.reduce((str, role) => { return str + ', ' + role.name }, '')
    }
  ];

  return (
    <>
      <Button onClick={goToUserForm}style={{margin: 20}}>Create New User</Button>
      <Table dataSource={data?.fetchUsers || []} columns={columns} />
    </>
  )
};

export default Users;
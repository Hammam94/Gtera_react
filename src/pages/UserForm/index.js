import { useState } from 'react';
import { Button, Space, Form, InputNumber, Input, Select} from 'antd';
import { useMutation, gql } from '@apollo/client';

const {Option} = Select;
const UserForm = () => {
  const [disabled, setDisabled] = useState(false);
  const [form] = Form.useForm();
  const [createUser] = useMutation(gql`
    mutation createUser ($email: String!, $password: String!, $roleId: ID!) {
      addUser(input: { params: {
        email: $email, 
        password: $password, 
        role: {id: $roleId}
      }}) {
        user {
          id
          email
          roles {
            id
            name
          }
        }
      }
    }
  `, {
    onCompleted: (response) => {
      console.log(response);
    }
  });

  const submit = (values) => {
    createUser({variables: {...values}});
  }

  return (
    <div style={{margin: 20, marginTop: 36}}>
      <Form
        layout={'vertical'}
        form={form}
        initialValues={{ layout:  'vertical' }}
        size={'large'}
        onFinish={submit}
      >
        <Form.Item
          label="email"
          name="email"
          rules={[{ required: true, message: 'Please input product name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="password"
          name="password"
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Role"
          name="roleId"
          rules={[{ required: true, message: 'Please select product shipping category!' }]}
        >
          <Select style={{ width: 120 }}>
            <Option value="1">admin</Option>
            <Option value="3">normal user</Option>
          </Select>
        </Form.Item>

        <Space>
          <Form.Item>
            <Button 
              type="primary" 
              htmlType="submit" 
              disabled={disabled}
            >
              Submit
            </Button>
          </Form.Item>
        </Space>
      </Form>
    </div>
  );
};

export default UserForm;

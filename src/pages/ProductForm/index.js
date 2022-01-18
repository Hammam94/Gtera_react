import { useState } from 'react';
import { Button, Space, Form, InputNumber, Input, Select} from 'antd';
import { useMutation, gql } from '@apollo/client';

const {Option} = Select;
const ProductForm = () => {
  const [disabled, setDisabled] = useState(false);
  const [form] = Form.useForm();
  const [createProduct] = useMutation(gql`
    mutation createProduct ($name: String!, $sku: String!, $description: String!, $shipping_category_id: ID!, $price: Float!) {
      addProduct(input: { params: {
        name: $name, 
        sku: $sku, 
        description: $description,
        shippingCategory: {id: $shipping_category_id},
        price: $price 
      }}) {
        product {
          id
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

  const submit = (values) => {
    // console.log(values);
    createProduct({variables: {...values}});
    // setDisabled(true);
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
          label="name"
          name="name"
          rules={[{ required: true, message: 'Please input product name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="description"
          name="description"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="SKU"
          name="sku"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="price"
          name="price"
          rules={[{ required: true, message: 'Please input product price!' }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          label="shipping category"
          name="shipping_category_id"
          rules={[{ required: true, message: 'Please select product shipping category!' }]}
        >
          <Select style={{ width: 120 }}>
            <Option value="1">1</Option>
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

export default ProductForm;

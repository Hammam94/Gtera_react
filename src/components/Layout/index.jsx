import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const AppLayout = ({appContent}) => {
  const history = useHistory();
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = collapsed => {
    setCollapsed(collapsed);
  };

  const goToUsers = () => history.push('/users')
  const goToProducts = () => history.push('/products')
  const goToRequests = () => history.push('/products/pending')
  const goToRejectedProjects = () => history.push('/products/rejected')
  
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<UserOutlined />} onClick={goToUsers}>
            Users
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />} onClick={goToProducts}>
            Products
          </Menu.Item>
          <Menu.Item key="82" icon={<DesktopOutlined />} onClick={goToRequests}>
            Approval Requests
          </Menu.Item>
          <Menu.Item key="22" icon={<DesktopOutlined />} onClick={goToRejectedProjects}>
            Rejected Products
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <div style={{margin: 40}}>
          {appContent}
        </div>
      </Layout>
    </Layout>
  );
}

export default AppLayout;
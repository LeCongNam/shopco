"use client";
import {
  BellOutlined,
  DesktopOutlined,
  FileOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
  TeamOutlined,
  TranslationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Avatar, Badge, Breadcrumb, Button, Layout, Menu, theme } from "antd";
import "antd/dist/reset.css";
import React, { useState } from "react";
import ProviderAntd from "./ConfigProvider";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <ProviderAntd>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="demo-logo-vertical text-white mb-20">ddddd</div>
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />
        </Sider>

        <Layout>
          {/* Header */}
          <Header
            style={{
              height: 64,
              padding: "0 16px",
              background: "#001529", // Dark color giống sider
              display: "flex",
              alignItems: "center",
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
                color: "white",
              }}
            />

            <Menu
              mode="horizontal"
              theme="dark"
              // selectable={false}
              // style={{
              //   marginLeft: "auto",
              //   background: "inherit",
              //   borderBottom: "none",
              //   display: "flex",
              //   alignItems: "center",
              // }}
            >
              <Menu.Item key="search" icon={<SearchOutlined />} />
              <Menu.Item key="help" icon={<QuestionCircleOutlined />} />
              <Menu.Item key="notification">
                <Badge count={11} offset={[2, -2]}>
                  <BellOutlined />
                </Badge>
              </Menu.Item>
              <Menu.Item key="user">
                <Avatar icon={<UserOutlined />} />
                <span style={{ marginLeft: 8 }}>Serati Ma</span>
              </Menu.Item>
              <Menu.Item key="translation" icon={<TranslationOutlined />} />
            </Menu>
          </Header>

          {/* Content */}
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              {children}
            </div>
          </Content>

          {/* Footer */}
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </ProviderAntd>
  );
}

export default DashboardLayout;

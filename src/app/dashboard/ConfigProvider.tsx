import { ConfigProvider } from "antd";

export default function ProviderAntd({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  return <ConfigProvider {...props}>{children}</ConfigProvider>;
}

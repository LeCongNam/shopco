import { Form, Input } from "antd";

function InputCustom({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <Form.Item label={label}>
      <Input placeholder={placeholder} />
    </Form.Item>
  );
}

export default InputCustom;

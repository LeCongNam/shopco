import { Form, InputNumber } from "antd";

function InputNumberCustom({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <Form.Item label={label}>
      <InputNumber placeholder={placeholder} />
    </Form.Item>
  );
}

export default InputNumberCustom;

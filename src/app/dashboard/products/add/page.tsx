"use client";
import InputCustom from "@/components/Input";
import InputNumberCustom from "@/components/InputNumber";
import { Form } from "antd";
import { useState } from "react";

type LayoutType = Parameters<typeof Form>[0]["layout"];

function AddProduct() {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>("vertical");

  const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
    setFormLayout(layout);
  };

  return (
    <Form
      layout={formLayout}
      form={form}
      initialValues={{ layout: formLayout }}
      onValuesChange={onFormLayoutChange}
      style={{ maxWidth: formLayout === "inline" ? "none" : 600 }}
    >
      <InputCustom label="name" placeholder="name of product.." />
      <InputCustom label="description" placeholder="description of product.." />
      <InputNumberCustom
        label="description"
        placeholder="description of product.."
      />
    </Form>
  );
}

export default AddProduct;

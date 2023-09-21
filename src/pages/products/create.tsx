import { UploadOutlined } from "@ant-design/icons";
import { Create, useForm, useSelect } from "@refinedev/antd";
import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  Radio,
  Row,
  Select,
  
} from "antd";
import CustomUpload from "../../components/CustomUpload";
import { useState } from "react";

interface Product {
  formProps: any;
  // setPhotoUrl: any;
  // photoUrl: any;
}

export const ProductCreate: React.FC<Product> = ({ formProps }) => {

  const [cat,setCat] = useState<any>()

  const handleInputPressEnter = (data: any) => {
    setCat([...data]);
  };

  return (
    <Form {...formProps} layout="vertical">
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Form.Item
            label="Name"
            name="product_name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="product Name" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Type"
            name="type"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="Enter Type here" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Product LInk"
            name="product_link"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="ADD Product link" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Category" name="category">         
            <Select
               value={cat}
               mode="multiple"
               onChange={handleInputPressEnter}
               allowClear
               showSearch
               filterOption={false}
              placeholder="Choose Category"
              options={[
                {
                  label: "Home",
                  value: "home",
                },
                {
                  label: "Kitchen",
                  value: "kitchen",
                },
                {
                  label: "Office",
                  value: "office",
                },
                {
                  label: "Bathroom",
                  value: "bathroom",
                },
                {
                  label: "Car",
                  value: "car",
                },
                {
                  label: "Travel",
                  value: "travel",
                },
                {
                  label: "Pets",
                  value: "pets",
                },
                {
                  label: "Outdoor",
                  value: "outdoor",
                },
                {
                  label: "For Him",
                  value: "him",
                },
                {
                  label: "For Her",
                  value: "her",
                },
                {
                  label: "Gadget",
                  value: "gadget",
                },
              ]}
            />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item label="Description" name="description">
            <Input placeholder="Description" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Trending" name="trending" initialValue={false}>
            <Radio.Group >
              <Radio value={true}>True</Radio>
              <Radio value={false}>False</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="List" name="list_status" initialValue={false}>
            <Radio.Group >
              <Radio value={true}>True</Radio>
              <Radio value={false}>False</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Clicks" name="total_clicks" initialValue={7}>
            <InputNumber min={1} max={10}  />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

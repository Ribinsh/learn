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
// const AvatarImage = "https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=600";

interface Product {
  formProps: any;
  // setPhotoUrl: any;
  // photoUrl: any;
}

export const ProductCreate: React.FC<Product> = ({ formProps }) => {
  // const [initial_url, setInitial_url] = useState<any>(AvatarImage);

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
          <Form.Item label="Trending" name="trending">
            <Radio.Group defaultValue={false}>
              <Radio value={true}>True</Radio>
              <Radio value={false}>False</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="List" name="list_status">
            <Radio.Group defaultValue={true}>
              <Radio value={true}>True</Radio>
              <Radio value={false}>False</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Clicks" name="total_clicks">
            <InputNumber min={1} max={10} defaultValue={7} />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

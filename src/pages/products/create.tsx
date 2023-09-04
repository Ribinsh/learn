import { UploadOutlined } from "@ant-design/icons";
import { Create, useForm, useSelect } from "@refinedev/antd";
import { Button, Col, Form, Image, Input, Row, Select, Upload } from "antd";
import CustomUpload from "../../components/CustomUpload";
import { useState } from "react";
// const AvatarImage = "https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&w=600";

interface Product {
    formProps: any;
    // setPhotoUrl: any;
    // photoUrl: any;
  }

export const ProductCreate: React.FC<Product> = ({formProps}) => {
    // const [initial_url, setInitial_url] = useState<any>(AvatarImage);

  return (
      <Form {...formProps} layout="vertical" >
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
        <Form.Item
          label="Type"
          name="type"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Product LInk"
          name="product_link"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Description" name="description">
          <Input />
        </Form.Item>
        <Form.Item label="Trending" name="trending">
          <Select
            
            options={[
              {
                label: "Yes",
                value: true,
              },
              {
                label: "No",
                value: false,
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="List" name="list_status">
          <Select
           
            options={[
              {
                label: "Yes",
                value: true  ,
              },
              {
                label: "No",
                value: false ,
              },
            ]}
          />
        </Form.Item>
      </Form>
    // </Create>
  );
};

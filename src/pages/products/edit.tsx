import { Edit, useForm } from "@refinedev/antd";
import { useState, useEffect } from "react";
import { useUpdate } from "@refinedev/core";

import {
  Button,
  Col,
  Form,
  Image,
  Input,
  InputNumber,
  Modal,
  Radio,
  Row,
  Select,
  Switch,
} from "antd";
import CustomUpload from "../../components/CustomUpload";
import { PlusOutlined } from "@ant-design/icons";

interface FormProps {
  // other properties
  image_url: string;
}

export const ProductEdit: React.FC = () => {
  const { formProps, saveButtonProps } = useForm({
    resource: "products",
    meta: {
      fields: [
        "id",
        "product_name",
        "type",
        "product_link",
        "description",
        "trending",
        "list_status",
        "image_url",
        "total_clicks",
        "category",
      ],
    },
  });
  const [photoUrl, setPhotoUrl] = useState<any>(formProps?.initialValues?.image_url);
//   const [productId, setProductId] = useState<any>(formProps?.id);
  const [imageModal, setImageModal] = useState<any>(false);

  

  const { mutateAsync: updateImage } = useUpdate();
  const updateItem = () => {
    updateImage({
      resource: "products",
      id: formProps?.initialValues?.id,
      values: {
        image_url: photoUrl,
      },
      successNotification: () => {
        return {
          message: "Image Added",
          description: "Success with no errors",
          type: "success",
        };
      },
    }).then(() => {
        setImageModal(false)
    });
  };

  return (
    <Edit saveButtonProps={saveButtonProps}>
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
              <Radio.Group>
                <Radio value={true}>True</Radio>
                <Radio value={false}>False</Radio>
              </Radio.Group>
              {/* <Switch checkedChildren="True" unCheckedChildren="False"  /> */}
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="List" name="list_status">
              <Radio.Group>
                <Radio value={true}>True</Radio>
                <Radio value={false}>False</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Clicks" name="total_clicks">
              <InputNumber min={1} max={10} />
            </Form.Item>
          </Col>
          <Col span={5}>
            <Image
              src={formProps?.initialValues?.image_url}
              width={100}
              // height={40}
              style={{ borderRadius: "0" }}
            />
          </Col>
          <Col span={6} >
            <Button
              type="primary"
              onClick={() => {
                setImageModal(true);
              }}
              icon={<PlusOutlined />}
              style={{marginTop:"30px"}}
            >
              Update Image
            </Button>
          </Col>
        </Row>
        
        
      </Form>
      <Modal
        open={imageModal}
        onCancel={() => {
          setImageModal(false);
        }}
        onOk={updateItem}
        title="Add Image of Product"
        width={600}
      >
        <CustomUpload
          link={photoUrl}
          setLink={setPhotoUrl}
          // productId={modalData?.id}
          expectedFileType="image"
        />
      </Modal>
    </Edit>
  );
};

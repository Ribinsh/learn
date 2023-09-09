import { DateField, Show } from "@refinedev/antd";

import { Descriptions, Image, Tag, Typography } from "antd";
import Link from "antd/es/typography/Link";
const { Title, Text } = Typography;

interface Showdata {
  product: any;
}

export const ProductShow: React.FC<Showdata> = ({ product }) => {
  return (
    <>
      <Title level={3} style={{ marginBottom: "25px", color: "#3db0e4" }}>
        {product?.product_name}
      </Title>
      <Descriptions
        bordered
        layout="horizontal"
        size="small"
        column={1}
        contentStyle={{
          display: "flex",
          fontSize: "100%",
          flexDirection: "column",
          fontWeight: "bold",
        }}
      >
        <Descriptions.Item label="Product Name">
          {product?.product_name}
        </Descriptions.Item>
        <Descriptions.Item label="Image">
        <Image
                src={product?.image_url}
                width={60}
                // height={40}
                style={{ borderRadius: "0" }}
              />
        </Descriptions.Item>
        <Descriptions.Item label="Product Type">
          {product?.type} 
        </Descriptions.Item>
        <Descriptions.Item label="Category">
          <Tag color="cyan">{product?.category.toUpperCase()}</Tag>          
        </Descriptions.Item>
        <Descriptions.Item label="Total Clicks">
          {product?.total_clicks}
        </Descriptions.Item>
        <Descriptions.Item label="Product Link">
            <Link href={product?.product_link}>
               {product?.product_link}
            </Link>
        </Descriptions.Item>
        
        <Descriptions.Item label="Trending">
          <Text>
            {product?.trending === true ? (
              <Tag color="success">True</Tag>
            ) : (
              <Tag color="error">False</Tag>
            )}
          </Text>
        </Descriptions.Item>
        <Descriptions.Item label="First Purchase">
          <Text>
            {product?.list_status === true ? (
              <Tag color="success">True</Tag>
            ) : (
              <Tag color="error">False</Tag>
            )}
          </Text>
        </Descriptions.Item>
        {/* <Descriptions.Item label="Active">
          <Text>
            {disList?.data?.discounts?.[0]?.active === true ? (
              <Tag color="success">True</Tag>
            ) : (
              <Tag color="error">False</Tag>
            )}
          </Text>
        </Descriptions.Item> */}
        <Descriptions.Item label="Created At">
          <DateField
            style={{ fontSize: "14px" }}
            value={product?.created_at}
            format="LL"
          />
        </Descriptions.Item>
        <Descriptions.Item label="Description">
          {product?.description}
        </Descriptions.Item>
      </Descriptions>
    </>
  );
};

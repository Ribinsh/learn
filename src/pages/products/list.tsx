
import { List, TextField, TagField, useTable, ShowButton, DeleteButton, EditButton, DateField, useModalForm } from "@refinedev/antd";
import { Button, Col, Image, Modal, Row, Space, Table, Tag,Typography } from "antd";
import { useState } from "react";
import { ProductCreate } from "./create";
const {Title , Text} = Typography
import { useUpdate } from "@refinedev/core";

import {
    PlusOutlined,
} from "@ant-design/icons";
import CustomUpload from "../../components/CustomUpload";
import { ok } from "assert";
import { text } from "stream/consumers";


export const ProductList: React.FC = () => {
  const [photoUrl,setPhotoUrl] = useState<any>()
  const [imageModal, setImageModal] = useState<any>(false)
  const [modalData, setModalData] = useState<any>()

    const { tableProps } = useTable({
        resource: "products",
        meta: {
           fields:["id","product_name","type","image_url","trending","list_status",'created_at',"total_clicks"]
        },
        sorters: {
          permanent: [
            {
              field: "created_at",
              order: "desc",
            },
          ],
        },
        
   })

  //  mutation MyMutation($productName: String!) {
  //   update_products(where: {name: {_eq: $productName}}, _set: {image_url: "nnnnnnnnnn"}) {
  //     returning {
  //       image_url
  //     }
  //   }
  // }

   const {
    show,
    modalProps,
    formProps,
    onFinish,
    close: closeCreateModal,
  } = useModalForm({
    resource: "products",
    action: "create",
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
      ],
    },
    autoSubmitClose: true,
    autoResetForm: true,
  });

  const handleImageModal = () =>{
    setImageModal(false)
  }

  const { mutateAsync: updateImage } = useUpdate();  
  const updateItem = () => {
    console.log(photoUrl,"hihihi");
    
    updateImage({
      resource: "products",     
      id: modalData.id,
      values: {
        image_url:photoUrl
      }, 
      successNotification: (data) => {
        return {
            message: "Image Added",
            description: "Success with no errors",
            type: "success",
        };
    },    });
    setImageModal(false)
};
 
    return (
      <>
        <Row justify="space-between">
        <Col>
          <Title level={4}>Product Lists</Title>
        </Col>
        <Col>
          <Row gutter={8}>
            <Col>
              <Button
                type="primary"
                onClick={() => show()}
                icon={<PlusOutlined/>}
              >
                Create
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
            <Table {...tableProps} rowKey="id">
                <Table.Column dataIndex="product_name" title="Name" 
                render={(_, record: any) => (
                  <Space>
                    <Text
                      className="text_transform"
                      style={{ cursor: "pointer", color: "#3db0e4" ,fontSize:"14px" , fontWeight:"normal" }}
                      // onClick={() => {
                      //   setBanner(record);
                      //   setVisibleShowModal(true);
                      // }}
                    >
                      {record?.product_name}
                    </Text>
                  </Space>
                )}
              />

                <Table.Column dataIndex="image_url" title="Image"
                render={(_: any, record: any) => record.image_url !== null ?
                  
                      <Image
                        src={record.image_url}
                        width={100}
                        // height={40}
                        style={{ borderRadius: "0" }}
                      />          
                   : 
                    <Button
                  type="primary"
                  onClick={() => {
                    setModalData(record)
                    setImageModal(true)
                  }
                    
                  }
                  icon={<PlusOutlined/>}
                >
                  Add Image
                </Button>}
                 />
                <Table.Column dataIndex="type" title="Type" />
                <Table.Column
                    sorter={(a: any, b: any) => a.created_at - b.created_at}
                    dataIndex="created_at"
                    title="Created"
                    render={(value: string) => <DateField value={value} format="L" />}
                />
                <Table.Column
                    dataIndex="total_clicks"
                    title="Clicks"
                    render={(value: String) => <TextField strong value={value}/>}
                />
                 <Table.Column dataIndex="trending" title="Trending" 
                  render={(_, record: any) =>
                     record?.trending === true ? (
                       <Tag color="#87d068">True</Tag>
                     ) : (
                       <Tag color="#f50">False</Tag>
                     )
                   }
                   filters={[
                    {
                      text: "True",
                      value: true,
                    },
                    {
                      text: "False",
                      value: false,
                    },
                   ]}
                   />
                 <Table.Column dataIndex="list_status" title="List"
                  render={(_, record: any) =>
                     record?.list_status === true ? (
                       <Tag color="#87d068">True</Tag>
                     ) : (
                       <Tag color="#f50">False</Tag>
                     )
                   } 
                   filters={[
                    {
                      text: "True",
                      value: true,
                    },
                    {
                      text: "False",
                      value: false,
                    },
                   ]}/>
                <Table.Column
                 title="Actions"
                 dataIndex="actions"
                 key='actions'
                    render={(_:any, record:any) =>
                       (
                            <Space>
                                <ShowButton recordItemId={record.id} hideText/>
                                <DeleteButton recordItemId={record.id} hideText/>
                                <EditButton recordItemId={record.id} hideText/>
                            </Space>
                        )
                    }
                />
            </Table>
        
         <Modal
         {...modalProps}
         title="Create Product"
         width={800}
         onCancel={() => {
           closeCreateModal();
           formProps?.form?.resetFields();
         }}
         onOk={onFinish}
       >
         <ProductCreate
           formProps={formProps}
          //  setPhotoUrl={setPhotoUrl}
          //  photoUrl={photoUrl}
         />
       </Modal>

       <Modal
       visible ={imageModal}
       onCancel={() => {
        handleImageModal();
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
       </>
    );
};
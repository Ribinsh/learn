
import { List, TextField, TagField, useTable, ShowButton, DeleteButton, EditButton } from "@refinedev/antd";
import { Space, Table, Tag } from "antd";

export const ProductList: React.FC = () => {
    const { tableProps } = useTable({
        resource: "products",
        meta: {
           fields:["id","product_name","type","image_url","trending","list_status",'created_at',"total_clicks"]
        }
   })
 
    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column dataIndex="product_name" title="Name" />
                <Table.Column dataIndex="image_url" title="Image" />
                <Table.Column dataIndex="type" title="Type" />
                <Table.Column
                    dataIndex="created_at"
                    title="Created"
                    render={(value: string) => <TagField value={value} />}
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
                   }/>
                 <Table.Column dataIndex="list_status" title="List"
                  render={(_, record: any) =>
                     record?.trending === true ? (
                       <Tag color="#87d068">True</Tag>
                     ) : (
                       <Tag color="#f50">False</Tag>
                     )
                   } />
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
        </List>
    );
};
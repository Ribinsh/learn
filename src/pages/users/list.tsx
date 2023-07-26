
import { List, TextField, TagField, useTable, ShowButton, DeleteButton, EditButton } from "@refinedev/antd";
import { Space, Table } from "antd";

export const UserList: React.FC = () => {
    const { tableProps } = useTable({
        resource: "users",
        meta: {
           fields:["id","name","age","salary","job","married"]
        }
   })
 
    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column dataIndex="id" title="ID" />
                <Table.Column dataIndex="name" title="Name" />
                <Table.Column
                    dataIndex="age"
                    title="Age"
                    render={(value: String) => <TextField strong value={value}/>}
                />
                <Table.Column
                    dataIndex="job"
                    title="Job"
                    render={(value: string) => <TagField value={value} />}
                />
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
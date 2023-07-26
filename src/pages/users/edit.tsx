import { Edit , useForm} from "@refinedev/antd";
import { Form, Input, Select } from "antd";



export const UserEdit : React.FC = () => {
    const { formProps, saveButtonProps } = useForm({
        resource: "users",
        meta: {
           fields:["id","name","age","salary","job","married"]
        },
        
    });  
    return(
        <Edit saveButtonProps={saveButtonProps}>
        <Form {...formProps} layout="vertical">
            <Form.Item
                label="Name"
                name="name"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Job"
                name="job"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Salary"
                name="salary"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Marriage"
                name="married"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Select
                    options={[
                        {
                            label: "Yes",
                            value: true,
                        },
                        {
                            label: "No",
                            value: false,
                        }
                    ]}
                />
            </Form.Item>
        </Form>
    </Edit>
    )
}
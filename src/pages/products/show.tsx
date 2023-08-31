import { Show } from "@refinedev/antd"
import { useShow } from "@refinedev/core"
import { Typography } from "antd"
const {Title , Text} = Typography

export const UserShow : React.FC = () => {
    const {queryResult} = useShow({
        resource: "users",
        meta: {
           fields:["id","name","age","salary","job","married"]
        }
    })
    const {data, isLoading} = queryResult;
    const record = data?.data;
    return(
        <Show isLoading={isLoading}>
            <Title>Id</Title>
            <Text>{record?.id}</Text>

            <Title>Name</Title>
            <Text>{record?.name}</Text>

            <Title>Job</Title>
            <Text>{record?.job}</Text>

            <Title>Age</Title>
            <Text>{record?.age}</Text>

        </Show>
    )
}
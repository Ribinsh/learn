import { AuthPage } from "@refinedev/antd";

export const Login = () => {
  return (
    <AuthPage
      type="login"
      formProps={{
        initialValues: { email: "ribinshp7@gmail.com", password: "Ribinsh@1998" },
      }}
    />
  );
};

import { Authenticated, Refine } from "@refinedev/core";
//  import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import {
  ErrorComponent,
  notificationProvider,
  ThemedLayoutV2,
  ThemedSiderV2,
} from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";

import dataProvider, {
  GraphQLClient,
  graphqlWS,
  liveProvider,
} from "@refinedev/hasura";
import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { authProvider } from "./authProvider";
import { Header } from "./components/header";
import { ColorModeContextProvider } from "./contexts/color-mode";


import { ForgotPassword } from "./pages/forgotPassword";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { ProductEdit, ProductList} from "./pages/products";


const API_URL = "https://guided-lacewing-38.hasura.app/v1/graphql";


const client = new GraphQLClient(API_URL, {
  headers: {
    "x-hasura-role": "admin",
    'x-hasura-admin-secret':"F1QSOR2z7Ui7YT2c8rFKG7IEURqgz0YnN0l67nKlArjDO9VlC3btxQsAk6JkHhVl"
  },
});



function App() {
  return (
    <BrowserRouter>
      {/* <GitHubBanner /> */}
      
        <ColorModeContextProvider>
          <Refine
            dataProvider={dataProvider(client)}
            // liveProvider={liveProvider(webSocketClient)}
            notificationProvider={notificationProvider}
            routerProvider={routerBindings}
            authProvider={authProvider}
            resources={[
              
              {
                name: "products",
                list: "/products",               
                edit: "/products/edit/:id",
                // show: "/products/show/:id",
                meta: {
                  canDelete: true,
                },
              },
            ]}
            options={{
              syncWithLocation: true,
              warnWhenUnsavedChanges: true,
            }}
          >
            <Routes>
              <Route
                element={
                  <Authenticated fallback={<CatchAllNavigate to="/login" />}>
                    <ThemedLayoutV2
                      Header={() => <Header sticky />}
                      Sider={(props) => <ThemedSiderV2 {...props} fixed />}
                    >
                      <Outlet />
                    </ThemedLayoutV2>
                  </Authenticated>
                }
              >
              
              <Route path="*" element={<ErrorComponent />} />

              <Route path="products">
                <Route index element = {<ProductList/>}/>
                <Route path="/products/edit/:id" element= {<ProductEdit/>} /> 
              </Route>
              </Route>
              <Route
                element={
                  <Authenticated fallback={<Outlet />}>
                    <NavigateToResource />
                  </Authenticated>
                }
              >
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
              </Route>
            </Routes>
 
            <UnsavedChangesNotifier />
            <DocumentTitleHandler />
          </Refine>
        </ColorModeContextProvider>
     
    </BrowserRouter>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TryOnSessionList } from "./tryOnSession/TryOnSessionList";
import { TryOnSessionCreate } from "./tryOnSession/TryOnSessionCreate";
import { TryOnSessionEdit } from "./tryOnSession/TryOnSessionEdit";
import { TryOnSessionShow } from "./tryOnSession/TryOnSessionShow";
import { OutfitList } from "./outfit/OutfitList";
import { OutfitCreate } from "./outfit/OutfitCreate";
import { OutfitEdit } from "./outfit/OutfitEdit";
import { OutfitShow } from "./outfit/OutfitShow";
import { FeedbackList } from "./feedback/FeedbackList";
import { FeedbackCreate } from "./feedback/FeedbackCreate";
import { FeedbackEdit } from "./feedback/FeedbackEdit";
import { FeedbackShow } from "./feedback/FeedbackShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"FashionCORE"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="TryOnSession"
          list={TryOnSessionList}
          edit={TryOnSessionEdit}
          create={TryOnSessionCreate}
          show={TryOnSessionShow}
        />
        <Resource
          name="Outfit"
          list={OutfitList}
          edit={OutfitEdit}
          create={OutfitCreate}
          show={OutfitShow}
        />
        <Resource
          name="Feedback"
          list={FeedbackList}
          edit={FeedbackEdit}
          create={FeedbackCreate}
          show={FeedbackShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;

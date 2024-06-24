import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { OUTFIT_TITLE_FIELD } from "../outfit/OutfitTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const TryOnSessionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"TryOnSessions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="feedback" source="feedback" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Outfit" source="outfit.id" reference="Outfit">
          <TextField source={OUTFIT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="tryOnDate" source="tryOnDate" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};

import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { OUTFIT_TITLE_FIELD } from "./OutfitTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const OutfitShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="category" source="category" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="imageUrl" source="imageUrl" />
        <TextField label="name" source="name" />
        <TextField label="price" source="price" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="TryOnSession"
          target="outfitId"
          label="TryOnSessions"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="feedback" source="feedback" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Outfit"
              source="outfit.id"
              reference="Outfit"
            >
              <TextField source={OUTFIT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="tryOnDate" source="tryOnDate" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { OutfitTitle } from "../outfit/OutfitTitle";
import { UserTitle } from "../user/UserTitle";

export const TryOnSessionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="feedback" multiline source="feedback" />
        <ReferenceInput source="outfit.id" reference="Outfit" label="Outfit">
          <SelectInput optionText={OutfitTitle} />
        </ReferenceInput>
        <DateTimeInput label="tryOnDate" source="tryOnDate" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

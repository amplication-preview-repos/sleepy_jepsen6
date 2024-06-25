import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { PaymentTitle } from "../payment/PaymentTitle";
import { UberRequestTitle } from "../uberRequest/UberRequestTitle";

export const JobEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="AssignedWorker" source="assignedWorker" />
        <TextInput label="Client" source="client" />
        <TextInput label="Description" multiline source="description" />
        <DateTimeInput label="EndTime" source="endTime" />
        <SelectInput
          source="jobType"
          label="JobType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceArrayInput
          source="payments"
          reference="Payment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PaymentTitle} />
        </ReferenceArrayInput>
        <NumberInput label="Price" source="price" />
        <DateTimeInput label="StartTime" source="startTime" />
        <SelectInput
          source="status"
          label="Status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Title" source="title" />
        <ReferenceArrayInput
          source="uberRequests"
          reference="UberRequest"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UberRequestTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};

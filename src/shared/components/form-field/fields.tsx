import { Input } from "~/shared/ui/input";
import { CFormFieldComponents, CFormFieldType } from "./types";
import { Checkbox } from "~/shared/ui/checkbox";
import { InputMask } from "~/shared/ui/input-mask";

export const getCFormField = (type: CFormFieldType) => {
  return formFields[type];
};

const formFields: CFormFieldComponents = {
  text: (field, settings) => <Input {...field} {...settings} />,
  password: (field, settings) => (
    <Input {...field} type="password" {...settings} />
  ),
  checkbox: ({ onChange, value, ...props }, settings) => (
    <Checkbox
      onCheckedChange={onChange}
      checked={value}
      {...props}
      {...settings}
    />
  ),
  tel: (field, settings) => (
    <InputMask {...field} mask={"+7 (999) 999-99-99"} {...settings} />
  ),
};

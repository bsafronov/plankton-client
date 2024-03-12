export type FieldType = "TEXT" | "NUMBER";

export type ProcessTemplate = {
  id: ID;
  name: string;
};

export type ProcessTemplateField = {
  id: ID;
  name: string;
  templateId: ID;
};

export type ProcessTemplateStage = {
  id: ID;
  name: string;
  templateId: ID;
};

export type ProcessTemplateStageField = {
  id: ID;
  type: FieldType;
  label?: string;
  description?: string;
  placeholder?: string;
  stageId: ID;
  fieldId: ID;
  templateId: ID;
};

export type ProcessTemplateStageFlow = {
  id: ID;
  value?: string;
  stageId: ID;
  nextStageId: ID;
  fieldId?: ID;
  templateId?: ID;
};

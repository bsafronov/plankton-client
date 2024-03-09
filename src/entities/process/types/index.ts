export type FieldType = "TEXT" | "NUMBER";

export type ProcessTemplate = {
  id: ID;
  name: string;
  fields?: ProcessFieldTemplate[];
  stages?: ProcessStageTemplate[];
  stageFlows?: ProcessStageFlowTemplate[];
  stageFields?: ProcessStageFieldTemplate[];
};
export type CreateProcessTemplate = Pick<ProcessTemplate, "name">;

export type ProcessFieldTemplate = {
  id: ID;
  name: string;
  formFields?: ProcessStageFieldTemplate;
  templateId: ID;
};
export type CreateProcessFieldTemplate = Pick<
  ProcessFieldTemplate,
  "name" | "templateId"
>;
export type FindManyProcessFieldTemplates = {
  templateId?: ID;
};

export type ProcessStageTemplate = {
  id: ID;
  name: string;
  fields?: ProcessStageFieldTemplate[];
  flowsFrom?: ProcessStageFlowTemplate[];
  flowsTo?: ProcessStageFlowTemplate[];
  templateId: ID;
};
export type CreateProcessStageTemplate = Pick<ProcessStageTemplate, "name">;
export type FindManyProcessStageTemplates = {
  templateId?: ID;
};

export type ProcessStageFieldTemplate = {
  id: ID;
  type: FieldType;
  label?: string;
  description?: string;
  placeholder?: string;
  flows?: ProcessStageFlowTemplate[];
  stageId: ID;
  fieldId: ID;
  templateId: ID;
};
export type CreateProcessStageFieldTemplate = Omit<
  ProcessStageFieldTemplate,
  "flows"
>;
export type FindManyProcessStageFieldTemplates = {
  templateId?: ID;
  stageId?: ID;
};

export type ProcessStageFlowTemplate = {
  id: ID;
  value?: string;
  stageId: ID;
  nextStageId: ID;
  fieldId?: ID;
  templateId?: ID;
};
export type CreateProcessStageFlowTemplate = Omit<
  ProcessStageFlowTemplate,
  "id"
>;
export type FindManyProcessStageFlowTemplates = {
  templateId?: ID;
  stageId?: ID;
};

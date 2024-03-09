import { http } from "~/shared/api";
import {
  CreateProcessFieldTemplate,
  CreateProcessStageFieldTemplate,
  CreateProcessStageFlowTemplate,
  CreateProcessStageTemplate,
  CreateProcessTemplate,
  FindManyProcessFieldTemplates,
  FindManyProcessStageFieldTemplates,
  FindManyProcessStageFlowTemplates,
  FindManyProcessStageTemplates,
  ProcessFieldTemplate,
  ProcessStageFieldTemplate,
  ProcessStageFlowTemplate,
  ProcessStageTemplate,
  ProcessTemplate,
} from "../types";

export const createTemplate = (body: CreateProcessTemplate) => {
  return http.post<ProcessTemplate>("/processes/templates/", body);
};

export const createFieldTemplate = (body: CreateProcessFieldTemplate) => {
  return http.post<ProcessFieldTemplate>("/processes/templates/fields", body);
};

export const createStageTemplate = (body: CreateProcessStageTemplate) => {
  return http.post<ProcessStageTemplate>("/processes/templates/stages/", body);
};

export const createStageFieldTemplate = (
  body: CreateProcessStageFieldTemplate
) => {
  return http.post<ProcessStageFieldTemplate>(
    "/processes/templates/stages/fields/",
    body
  );
};

export const createStageFlowTemplate = (
  body: CreateProcessStageFlowTemplate
) => {
  return http.post<ProcessStageFlowTemplate>(
    "/processes/templates/stages/flows/",
    body
  );
};

export const findOneTemplate = (id: ID) => {
  return http.get<ProcessTemplate>(`/processes/templates/${id}/`);
};

export const findManyFieldTemplates = (
  params?: FindManyProcessFieldTemplates
) => {
  return http.get<ProcessFieldTemplate[]>("/processes/templates/fields", {
    params,
  });
};

export const findManyStageTemplates = (
  params?: FindManyProcessStageTemplates
) => {
  return http.get<ProcessStageTemplate[]>("/processes/templates/fields", {
    params,
  });
};

export const findManyStageFieldTemplates = (
  params?: FindManyProcessStageFieldTemplates
) => {
  return http.get<ProcessStageFieldTemplate[]>("/processes/templates/fields", {
    params,
  });
};

export const findManyStageFlowTemplates = (
  params?: FindManyProcessStageFlowTemplates
) => {
  return http.get<ProcessStageFlowTemplate[]>("/processes/templates/fields", {
    params,
  });
};

interface ProjectDocumentParticipantTypeParticipantTypeObject {
  id: XmlElem<number>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  is_required: XmlElem<boolean>;
}

interface ProjectDocumentParticipantType {
  participant_type_id: XmlElem<number, BossTypeCatalogDocumentTopElem>;
  participant_type_name: XmlElem<string>;
  participant_type_objects: XmlMultiElem<ProjectDocumentParticipantTypeParticipantTypeObject>;
}

interface ProjectDocumentParticipantRole {
  participant_role_id: XmlElem<number, ProjectParticipantRoleCatalogDocumentTopElem>;
}

interface ProjectDocumentFile extends FileBase {
  visibility: XmlElem<string>;
}

type ProjectDocumentTopElem = XmlTopElem &
CatalogListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: ProjectDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  subdivision_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  contract_id: XmlElem<number, ContractCatalogDocumentTopElem>;
  resource_type_id: XmlElem<number, ResourceTypeCatalogDocumentTopElem>;
  project_type_id: XmlElem<number, ProjectTypeCatalogDocumentTopElem>;
  sale_contract_id: XmlElem<number, SaleContractCatalogDocumentTopElem>;
  workflow_id: XmlElem<number, WorkflowCatalogDocumentTopElem>;
  status: XmlElem<string, typeof common.project_status_types>;
  is_model: XmlElem<boolean>;
  plan_labor_costs: XmlElem<number>;
  fact_labor_costs: XmlElem<number>;
  percent_complete: XmlElem<number>;
  team_selected: XmlElem<boolean>;
  allow_assessment: XmlElem<boolean>;
  text_result: XmlElem<string>;
  join_mode: XmlElem<string, typeof common.join_mode_types>;
  default_request_type_id: XmlElem<number, RequestTypeCatalogDocumentTopElem>;
  start_date_plan: XmlElem<Date>;
  end_date_plan: XmlElem<Date>;
  start_date_fact: XmlElem<Date>;
  end_date_fact: XmlElem<Date>;
  all_participant_view_task: XmlElem<boolean>;
  allow_assigning_tasks_to_all: XmlElem<boolean>;
  participant_types: XmlMultiElem<ProjectDocumentParticipantType>;
  participant_roles: XmlMultiElem<ProjectDocumentParticipantRole>;
  files: XmlMultiElem<ProjectDocumentFile>;
  AddFile(fileId: number): unknown;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  role_id: XmlMultiElemObject<number>;
  access: XmlElem<AccessDocBase>;
  set_status(newStatus: string, sendNotifications: boolean, screen: unknown): unknown;
  create_project_participant(fldParticipant: unknown): unknown;
  start_action(type: string): number;
};

type ProjectDocument = XmlDocument & {
  TopElem: ProjectDocumentTopElem;
  project: ProjectDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};

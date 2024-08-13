interface ProjectDocumentParticipantTypeParticipantTypeObject {
  id: XmlElem<number | null>;
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  object_id: XmlElem<number | null>;
  object_name: XmlElem<string | null>;
  is_required: XmlElem<boolean>;
}

interface ProjectDocumentParticipantType {
  participant_type_id: XmlElem<number | null, BossTypeCatalogDocumentTopElem>;
  participant_type_name: XmlElem<string | null>;
  participant_type_objects: XmlMultiElem<ProjectDocumentParticipantTypeParticipantTypeObject | null>;
}

interface ProjectDocumentParticipantRole {
  participant_role_id: XmlElem<number | null, ProjectParticipantRoleCatalogDocumentTopElem>;
}

interface ProjectDocumentFile extends FileBase {
  visibility: XmlElem<string>;
}

type ProjectDocumentTopElem = XmlTopElem &
CatalogListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: ProjectDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  contract_id: XmlElem<number | null, ContractCatalogDocumentTopElem>;
  resource_type_id: XmlElem<number | null, ResourceTypeCatalogDocumentTopElem>;
  project_type_id: XmlElem<number | null, ProjectTypeCatalogDocumentTopElem>;
  sale_contract_id: XmlElem<number | null, SaleContractCatalogDocumentTopElem>;
  workflow_id: XmlElem<number | null, WorkflowCatalogDocumentTopElem>;
  status: XmlElem<string, typeof common.project_status_types>;
  is_model: XmlElem<boolean>;
  plan_labor_costs: XmlElem<number | null>;
  fact_labor_costs: XmlElem<number | null>;
  percent_complete: XmlElem<number | null>;
  team_selected: XmlElem<boolean>;
  allow_assessment: XmlElem<boolean>;
  text_result: XmlElem<string | null>;
  join_mode: XmlElem<string, typeof common.join_mode_types>;
  default_request_type_id: XmlElem<number | null, RequestTypeCatalogDocumentTopElem>;
  start_date_plan: XmlElem<Date | null>;
  end_date_plan: XmlElem<Date | null>;
  start_date_fact: XmlElem<Date | null>;
  end_date_fact: XmlElem<Date | null>;
  all_participant_view_task: XmlElem<boolean>;
  allow_assigning_tasks_to_all: XmlElem<boolean>;
  participant_types: XmlMultiElem<ProjectDocumentParticipantType | null>;
  participant_roles: XmlMultiElem<ProjectDocumentParticipantRole | null>;
  files: XmlMultiElem<ProjectDocumentFile | null>;
  AddFile(fileId: number): void;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  role_id: XmlMultiElemObject<number | null>;
  access: XmlElem<AccessDocBase | null>;
  set_status(newStatus: string, sendNotifications: boolean, screen: unknown): void;
  create_project_participant(fldParticipant: unknown): unknown;
  start_action(type: string): number;
};

type ProjectDocument = XmlDocument & {
  TopElem: ProjectDocumentTopElem;
  project: ProjectDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};

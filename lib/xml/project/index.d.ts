interface ProjectDocumentParticipantTypeParticipantTypeObject {
  id: XmlElem<number>;
  object_type: XmlElem<string>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  is_required: XmlElem<boolean>;
}
interface ProjectDocumentParticipantType {
  participant_type_id: XmlElem<number>;
  participant_type_name: XmlElem<string>;
  participant_type_objects: XmlMultiElem<ProjectDocumentParticipantTypeParticipantTypeObject>;
}

interface ProjectDocumentParticipantRole {
  participant_role_id: XmlElem<number>;
}

interface ProjectDocumentFile extends FileBase {
  visibility: XmlElem<string>;
}

type ProjectDocumentTopElem = XmlTopElem & { Doc: ProjectDocument } & 
  CatalogListBase &
  AdminAccessBase &
  CustomElemsBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  org_id: XmlElem<number>;
  subdivision_id: XmlElem<number>;
  group_id: XmlElem<number>;
  contract_id: XmlElem<number>;
  resource_type_id: XmlElem<number>;
  project_type_id: XmlElem<number>;
  sale_contract_id: XmlElem<number>;
  workflow_id: XmlElem<number>;
  status: XmlElem<string>;
  is_model: XmlElem<boolean>;
  plan_labor_costs: XmlElem<number>;
  fact_labor_costs: XmlElem<number>;
  percent_complete: XmlElem<number>;
  team_selected: XmlElem<boolean>;
  allow_assessment: XmlElem<boolean>;
  text_result: XmlElem<string>;
  join_mode: XmlElem<string>;
  default_request_type_id: XmlElem<number>;
  start_date_plan: XmlElem<Date>;
  end_date_plan: XmlElem<Date>;
  start_date_fact: XmlElem<Date>;
  end_date_fact: XmlElem<Date>;
  participant_types: XmlMultiElem<ProjectDocumentParticipantType>;
  participant_roles: XmlMultiElem<ProjectDocumentParticipantRole>;
  files: XmlMultiElem<ProjectDocumentFile>;
  AddFile(): unknown;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  role_id: XmlMultiElem<number>;
  access: XmlElem<AccessDocBase>;
  set_status(): unknown;
  create_project_participant(): unknown;
  start_action(): unknown;
}

type ProjectDocument = XmlDocument & { TopElem: ProjectDocumentTopElem; };

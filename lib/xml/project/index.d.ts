interface ProjectParticipantTypeParticipantTypeObject {
  id?: XmlElem<number>;
  object_type?: XmlElem<string>;
  object_id?: XmlElem<number>;
  object_name?: XmlElem<string>;
  is_required?: XmlElem<boolean>;
}

interface ProjectParticipantType {
  participant_type_id?: XmlElem<number>;
  participant_type_name?: XmlElem<string>;
  participant_type_objects?: XmlMultiElem<ProjectParticipantTypeParticipantTypeObject>;
}

interface ProjectParticipantRole {
  participant_role_id?: XmlElem<number>;
}

interface ProjectFile extends FileBase {
  visibility?: XmlElem<string>;
}

interface ProjectView extends DescBase {
  tab_selector?: XmlElem<string>;
  participant_catalog?: XmlElem<string>;
}

interface ProjectTopElem extends XmlTopElem<ProjectDocument>, CatalogListBase, AdminAccessBase, CustomElemsBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  org_id?: XmlElem<number>;
  subdivision_id?: XmlElem<number>;
  group_id?: XmlElem<number>;
  contract_id?: XmlElem<number>;
  resource_type_id?: XmlElem<number>;
  project_type_id?: XmlElem<number>;
  sale_contract_id?: XmlElem<number>;
  workflow_id?: XmlElem<number>;
  status?: XmlElem<string>;
  is_model?: XmlElem<boolean>;
  plan_labor_costs?: XmlElem<number>;
  fact_labor_costs?: XmlElem<number>;
  percent_complete?: XmlElem<number>;
  team_selected?: XmlElem<boolean>;
  allow_assessment?: XmlElem<boolean>;
  text_result?: XmlElem<string>;
  join_mode?: XmlElem<string>;
  default_request_type_id?: XmlElem<number>;
  start_date_plan?: XmlElem<Date>;
  end_date_plan?: XmlElem<Date>;
  start_date_fact?: XmlElem<Date>;
  end_date_fact?: XmlElem<Date>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  rows?: XmlElem<any>;
  row_disp_elem?: XmlElem<string>;
  row_list_field?: XmlElem<string>;
  row_key_field?: XmlElem<string>;
  list_variant?: XmlElem<any>;
  role_id?: XmlMultiElem<number>;
  participant_types?: XmlMultiElem<ProjectParticipantType>;
  participant_roles?: XmlMultiElem<ProjectParticipantRole>;
  files?: XmlMultiElem<ProjectFile>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<ProjectView>;
  AddFile?(): any;
  set_status?(): any;
  create_project_participant?(): any;
  start_action?(): any;
}

type ProjectDocument = XmlDocument<ProjectTopElem>;

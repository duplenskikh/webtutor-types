interface RequestPerson extends PersonFillingBase {
  person_id?: XmlElem<number>;
}

interface RequestGroup {
  group_id?: XmlElem<number>;
}

interface RequestWorkflowMatching {
  id?: XmlElem<string>;
  person_id?: XmlElem<number>;
  type?: XmlElem<string>;
  is_main?: XmlElem<boolean>;
}

interface RequestView {
  selector?: XmlElem<string>;
  workflow_state?: XmlElem<string>;
  workflow_action_result?: XmlElem<any>;
  workflow_create_break?: XmlElem<boolean>;
}

interface RequestTopElem extends XmlTopElem<RequestDocument>, PersonFillingBase, KnowledgePartsBase, WorkflowDataBase, FileListBase, CustomElemsBase, AdminAccessBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  request_type_id?: XmlElem<number>;
  budget_period_id?: XmlElem<number>;
  type?: XmlElem<string>;
  status_id?: XmlElem<string>;
  create_date?: XmlElem<Date>;
  close_date?: XmlElem<Date>;
  plan_close_date?: XmlElem<Date>;
  person_id?: XmlElem<number>;
  object_id?: XmlElem<number>;
  object_name?: XmlElem<string>;
  object_code?: XmlElem<string>;
  object_start_date?: XmlElem<Date>;
  object_type?: XmlElem<string>;
  is_group?: XmlElem<boolean>;
  workflow_matching_type?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  comment?: XmlElem<string>;
  list_variant?: XmlElem<any>;
  rows?: XmlElem<any>;
  row_disp_elem?: XmlElem<string>;
  row_list_field?: XmlElem<string>;
  row_key_field?: XmlElem<string>;
  persons?: XmlMultiElem<RequestPerson>;
  groups?: XmlMultiElem<RequestGroup>;
  workflow_matchings?: XmlMultiElem<RequestWorkflowMatching>;
  view?: XmlElem<RequestView>;
  access?: XmlElem<AccessDocBase>;
  name?(): any;
  person_num?(): any;
  start_action?(): any;
}

type RequestDocument = XmlDocument<RequestTopElem>;

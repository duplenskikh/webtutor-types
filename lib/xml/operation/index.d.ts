interface OperationTopElem extends XmlTopElem<OperationDocument>, WebVariablesBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  category?: XmlElem<string>;
  is_system?: XmlElem<boolean>;
  priority?: XmlElem<number>;
  action?: XmlElem<string>;
  operation_type?: XmlElem<number>;
  object_name?: XmlElem<string>;
  operation_catalog_list?: XmlElem<string>;
  group?: XmlElem<string>;
  script?: XmlElem<string>;
  post_code?: XmlElem<string>;
  eval_code?: XmlElem<string>;
  remote_action_id?: XmlElem<number>;
  access_eval_code?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  comment?: XmlElem<string>;
  is_std?: XmlElem<boolean>;
  changed?: XmlElem<boolean>;
  role_id?: XmlMultiElem<number>;
  use_access_eval?(): any;
  execute?(): any;
}

type OperationDocument = XmlDocument<OperationTopElem>;

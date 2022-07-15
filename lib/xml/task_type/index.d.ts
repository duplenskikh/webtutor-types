interface TaskTypeRole {
  id?: XmlElem<string>;
  name?: XmlElem<string>;
}

interface TaskTypeView {
  selector?: XmlElem<string>;
}

interface TaskTypeTopElem extends XmlTopElem<TaskTypeDocument>, CustomElemsBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  workflow_id?: XmlElem<number>;
  comment?: XmlElem<string>;
  eval_code_for_url?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  is_std?: XmlElem<boolean>;
  changed?: XmlElem<boolean>;
  roles?: XmlMultiElem<TaskTypeRole>;
  view?: XmlElem<TaskTypeView>;
}

type TaskTypeDocument = XmlDocument<TaskTypeTopElem>;

interface TaskTypeDocumentRole {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

type TaskTypeDocumentTopElem = XmlTopElem & { Doc: TaskTypeDocument } & 
CustomElemsBase & {
  code: XmlElem<string>;
  name: XmlElem<string>;
  workflow_id: XmlElem<number>;
  comment: XmlElem<string>;
  eval_code_for_url: XmlElem<string>;
  roles: XmlMultiElem<TaskTypeDocumentRole>;
  doc_info: XmlElem<DocInfoBase>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
}

type TaskTypeDocument = XmlDocument & {
  TopElem: TaskTypeDocumentTopElem;
};

interface PolicyTopElem extends XmlTopElem<PolicyDocument>, PersonFillingBase, FileListBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  person_id?: XmlElem<number>;
  number?: XmlElem<string>;
  policy_type_id?: XmlElem<number>;
  state_id?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type PolicyDocument = XmlDocument<PolicyTopElem>;
